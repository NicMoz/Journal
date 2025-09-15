package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

type JournalEntry struct{
	Positives string `json:"positives"`
	Lows string `json:"lows"`
	Sleep string `json:"sleep"`
	Nutrition string `json:"nutrition"`
	TimeEfficenecy string `json:"timeEfficenecy"`
	TimeManagement string `json:"timeManagement"`
}

func main(){
	r := gin.Default()

	r.Use(cors.Default())

	r.POST("/journal", func(c *gin.Context){
		var entry JournalEntry
		if err := c.ShouldBindJSON(&entry); err != nil{
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusCreated, gin.H{
			"status": "saved",
			"entry": entry,
		})
	})

	r.Run(":8080")
}