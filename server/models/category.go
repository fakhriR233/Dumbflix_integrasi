package models

import "time"

type Category struct {
  ID        int       `json:"id"`
  Name      string    `json:"name" gorm:"type: varchar(255)"`
  CreatedAt time.Time `json:"-"`
  UpdatedAt time.Time `json:"-"`
}

type CategoryResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name" gorm:"type: varchar(255)"`
  }
  
func (CategoryResponse) TableName() string {
	return "categories"
  }