package handlers

import (
	dto "dumbflix_be/dto/result"
	transactiondto "dumbflix_be/dto/transaction"
	"dumbflix_be/models"
	"dumbflix_be/repositories"
	"encoding/json"
	"math/rand"
	"net/http"
	"os"
	"strconv"

	"github.com/golang-jwt/jwt/v4"
	"github.com/gorilla/mux"

	"github.com/midtrans/midtrans-go"
	"github.com/midtrans/midtrans-go/coreapi"
	"github.com/midtrans/midtrans-go/snap"
)

type handlerTransaction struct {
	TransactionRepository repositories.TransactionRepository
  }

func HandlerTransaction(TransactionRepository repositories.TransactionRepository) *handlerTransaction {
	return &handlerTransaction{TransactionRepository}
}

var c = coreapi.Client{
	ServerKey: os.Getenv("SERVER_KEY"),
	ClientKey:  os.Getenv("CLIENT_KEY"),
  }

func (h *handlerTransaction) FindTransactions(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
  
	transaction, err := h.TransactionRepository.FindTransactions()
	if err != nil {
	  w.WriteHeader(http.StatusInternalServerError)
	  response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{
		Code: http.StatusOK, 
		Data: transaction,
	}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerTransaction) GetTransaction(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
  
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
  
	var transaction models.Transaction
	transaction, err := h.TransactionRepository.GetTransaction(id)
	if err != nil {
	  w.WriteHeader(http.StatusInternalServerError)
	  response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseTransaction(transaction)}
	json.NewEncoder(w).Encode(response)
  }

  func (h *handlerTransaction) CreateTransaction(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))
  
	request := new(transactiondto.TransactionRequest)
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
	  w.WriteHeader(http.StatusBadRequest)
	  response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}

	var TransIdIsMatch = false
	var TransactionId int
	for !TransIdIsMatch { TransactionId = userId + rand.Intn(10000) - rand.Intn(100)
		transactionData, _ := h.TransactionRepository.GetTransaction(TransactionId)
		if transactionData.ID == 0 {
			TransIdIsMatch = true
		}
	}
  
	// validation := validator.New()
	// err := validation.Struct(request)
	// if err != nil {
	//   w.WriteHeader(http.StatusInternalServerError)
	//   response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
	//   json.NewEncoder(w).Encode(response)
	//   return
	// }
  
	transaction := models.Transaction{
		ID:				TransactionId,
		UserID:    		userId,
		Price:    		49000,
		Status:      	"pending",
	}
  
	newTransaction, err := h.TransactionRepository.CreateTransaction(transaction)
	if err != nil {
	  w.WriteHeader(http.StatusInternalServerError)
	  response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	dataTransactions, err := h.TransactionRepository.GetTransaction(newTransaction.ID)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
		return
	}

	// 1. Initiate Snap client
var s = snap.Client{}
s.New(os.Getenv("SERVER_KEY"), midtrans.Sandbox)
// Use to midtrans.Production if you want Production Environment (accept real transaction).

// 2. Initiate Snap request param
req := &snap.Request{
  TransactionDetails: midtrans.TransactionDetails{
    OrderID:  strconv.Itoa(dataTransactions.ID),
    GrossAmt: int64(dataTransactions.Price),
  },
  CreditCard: &snap.CreditCardDetails{
    Secure: true,
  },
  CustomerDetail: &midtrans.CustomerDetails{
    FName: dataTransactions.User.FullName,
    Email: dataTransactions.User.Email,
  },
  }

// 3. Execute request create Snap transaction to Midtrans Snap API
snapResp, _ := s.CreateTransaction(req)
  
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: snapResp}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerTransaction) UpdatesTransaction(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
  
	request := new(transactiondto.TransactionUpdateRequest) //take pattern data submission
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
	  w.WriteHeader(http.StatusBadRequest)
	  response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	transactionDataOld, _ := h.TransactionRepository.GetTransaction(id)
  
	transaction := models.Transaction{} 
  
	if request.StartDate != "" {
		transaction.StartDate = request.StartDate
	}else {
		transaction.StartDate = transactionDataOld.StartDate
	}
	
	if request.DueDate != "" {
	transaction.DueDate = request.DueDate
	}else {
		transaction.DueDate = transactionDataOld.DueDate
	}
	  
	if request.UserID != 0 {
		transaction.UserID = request.UserID
		transactionDataNew, _ := h.TransactionRepository.GetTransaction(transaction.UserID)
		transaction.User = transactionDataNew.User
		}else {
		transaction.UserID = transactionDataOld.UserID
		transaction.User = transactionDataOld.User
	}

	if request.Attache != "" {
		transaction.Attache = request.Attache
	}else {
		transaction.Attache = transactionDataOld.Attache
	}
	if request.Status != "" {
		transaction.Status = request.Status
	}else {
		transaction.Status = transactionDataOld.Status
	}

	data, err := h.TransactionRepository.UpdatesTransaction(transaction,id)
	if err != nil {
	  w.WriteHeader(http.StatusInternalServerError)
	  response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseTransactionUpdate(data)}
	json.NewEncoder(w).Encode(response)
  }

func (h *handlerTransaction) DeleteTransaction(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
  
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
  
	transaction, err := h.TransactionRepository.GetTransaction(id)
	if err != nil {
	  w.WriteHeader(http.StatusBadRequest)
	  response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	data, err := h.TransactionRepository.DeleteTransaction(transaction,id)
	if err != nil {
	  w.WriteHeader(http.StatusInternalServerError)
	  response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseDeleteTransaction(data)}
	json.NewEncoder(w).Encode(response)
  }

  func (h *handlerTransaction) Notification(w http.ResponseWriter, r *http.Request) {
	var notificationPayload map[string]interface{}
  
	err := json.NewDecoder(r.Body).Decode(&notificationPayload)
	if err != nil {
	  w.WriteHeader(http.StatusBadRequest)
	  response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
	  json.NewEncoder(w).Encode(response)
	  return
	}
  
	transactionStatus := notificationPayload["transaction_status"].(string)
	fraudStatus := notificationPayload["fraud_status"].(string)
	orderId := notificationPayload["order_id"].(string)
  
	if transactionStatus == "capture" {
	  if fraudStatus == "challenge" {
		// TODO set transaction status on your database to 'challenge'
		// e.g: 'Payment status challenged. Please take action on your Merchant Administration Portal
		h.TransactionRepository.UpdateTransaction("pending",  orderId)
	  } else if fraudStatus == "accept" {
		// TODO set transaction status on your database to 'success'
		h.TransactionRepository.UpdateTransaction("success",  orderId)
	  }
	} else if transactionStatus == "settlement" {
	  // TODO set transaction status on your databaase to 'success'
	  h.TransactionRepository.UpdateTransaction("success",  orderId)
	} else if transactionStatus == "deny" {
	  // TODO you can ignore 'deny', because most of the time it allows payment retries
	  // and later can become success
	  h.TransactionRepository.UpdateTransaction("failed",  orderId)
	} else if transactionStatus == "cancel" || transactionStatus == "expire" {
	  // TODO set transaction status on your databaase to 'failure'
	  h.TransactionRepository.UpdateTransaction("failed",  orderId)
	} else if transactionStatus == "pending" {
	  // TODO set transaction status on your databaase to 'pending' / waiting payment
	  h.TransactionRepository.UpdateTransaction("pending",  orderId)
	}
  
	w.WriteHeader(http.StatusOK)
  }

func convertResponseTransaction(u models.Transaction) models.Transaction {
	return models.Transaction{
		ID:			u.ID,
	  StartDate:    u.StartDate,
	  DueDate:     	u.DueDate,
	  User:    		u.User,
	  UserID: 		u.UserID,
	  Attache:    	u.Attache,
	  Status:      	u.Status,
	}
}

func convertResponseTransactionUpdate(u models.Transaction) transactiondto.TransactionUpdateResponse {
	return transactiondto.TransactionUpdateResponse{
		ID:			u.ID,
	  StartDate:    u.StartDate,
	  DueDate:     	u.DueDate,
	  UserID: 		u.UserID,
	  User:    		u.User,
	  Attache:    	u.Attache,
	  Status:      	u.Status,
	}
}

func convertResponseDeleteTransaction(u models.Transaction) transactiondto.TransactionDeleteResponse {
	return transactiondto.TransactionDeleteResponse{
	  ID:    u.ID,
	}
}