package com.example.myapplication

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.activity.ComponentActivity

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Tìm EditText
        val display = findViewById<EditText>(R.id.display)

        // Tìm các nút
        val button0 = findViewById<Button>(R.id.button0)
        val button1 = findViewById<Button>(R.id.button1)
        val button2 = findViewById<Button>(R.id.button2)
        val button3 = findViewById<Button>(R.id.button3)
        val button4 = findViewById<Button>(R.id.button4)
        val button5 = findViewById<Button>(R.id.button5)
        val button6 = findViewById<Button>(R.id.button6)
        val button7 = findViewById<Button>(R.id.button7)
        val button8 = findViewById<Button>(R.id.button8)
        val button9 = findViewById<Button>(R.id.button9)
        val buttonAdd = findViewById<Button>(R.id.buttonAdd)
        val buttonSubtract = findViewById<Button>(R.id.buttonSubtract)
        val buttonMultiply = findViewById<Button>(R.id.buttonMultiply)
        val buttonDivide = findViewById<Button>(R.id.buttonDivide)
        val buttonClear = findViewById<Button>(R.id.buttonClear)
        val buttonEquals = findViewById<Button>(R.id.buttonEquals)

        // Biến lưu trữ
        var currentNumber = ""
        var firstNumber = 0.0
        var operator = ""
        var isNewOperation = true

        // Hàm cập nhật hiển thị
        fun updateDisplay(value: String) {
            display.setText(value)
        }

        // Xử lý các nút số
        val numberButtons = listOf(button0, button1, button2, button3, button4, button5, button6, button7, button8, button9)
        for (button in numberButtons) {
            button.setOnClickListener {
                if (isNewOperation) {
                    currentNumber = ""
                    isNewOperation = false
                }
                currentNumber += button.text
                updateDisplay(currentNumber)
            }
        }

        // Xử lý các nút phép toán
        buttonAdd.setOnClickListener {
            if (currentNumber.isNotEmpty()) {
                firstNumber = currentNumber.toDouble()
                operator = "+"
                currentNumber = ""
                isNewOperation = true
            }
        }
        buttonSubtract.setOnClickListener {
            if (currentNumber.isNotEmpty()) {
                firstNumber = currentNumber.toDouble()
                operator = "-"
                currentNumber = ""
                isNewOperation = true
            }
        }
        buttonMultiply.setOnClickListener {
            if (currentNumber.isNotEmpty()) {
                firstNumber = currentNumber.toDouble()
                operator = "*"
                currentNumber = ""
                isNewOperation = true
            }
        }
        buttonDivide.setOnClickListener {
            if (currentNumber.isNotEmpty()) {
                firstNumber = currentNumber.toDouble()
                operator = "/"
                currentNumber = ""
                isNewOperation = true
            }
        }

        // Xử lý nút xóa
        buttonClear.setOnClickListener {
            currentNumber = ""
            firstNumber = 0.0
            operator = ""
            isNewOperation = true
            updateDisplay("0")
        }

        // Xử lý nút bằng
        buttonEquals.setOnClickListener {
            if (currentNumber.isNotEmpty() && operator.isNotEmpty()) {
                val secondNumber = currentNumber.toDouble()
                val result = when (operator) {
                    "+" -> firstNumber + secondNumber
                    "-" -> firstNumber - secondNumber
                    "*" -> firstNumber * secondNumber
                    "/" -> if (secondNumber != 0.0) firstNumber / secondNumber else "Error"
                    else -> 0.0
                }
                updateDisplay(result.toString())
                currentNumber = result.toString()
                isNewOperation = true
            } else if (operator.isNotEmpty()) {
            // THÊM ĐOẠN NÀY ĐỂ HIỂN THỊ LỖI KHI THIẾU TOÁN HẠNG
            updateDisplay("Error")
            currentNumber = ""
            isNewOperation = true
            }
        }
    }
}