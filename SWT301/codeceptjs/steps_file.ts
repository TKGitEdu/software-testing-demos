export = function() {
  return actor({
    // Nhấn một chuỗi số (ví dụ: nhập "123")
    enterNumber: async function(number: number | string) {
      const digits = number.toString().split('');
      for (const digit of digits) {
        await this.click(`~button${digit}`);
      }
    },

    // Thực hiện phép toán (cộng, trừ, nhân, chia)
    performOperation: async function(operator: '+' | '-' | '*' | '/') {
      const operatorMap: { [key: string]: string } = {
        '+': 'button_add',
        '-': 'button_subtract',
        '*': 'button_multiply',
        '/': 'button_divide'
      };
      await this.click(`~${operatorMap[operator]}`);
    },

    // Nhấn nút bằng để lấy kết quả
    calculate: async function() {
      await this.click('~button_equals');
    },

    // Kiểm tra kết quả trên màn hình
    verifyResult: async function(expected: string | number) {
      await this.seeInField('~display', expected.toString());
    },

    // Nhấn nút xóa
    clearDisplay: async function() {
      await this.click('~button_clear');
    },

    // Thực hiện phép toán hoàn chỉnh (ví dụ: 5 + 3 = 8)
    performCalculation: async function(num1: number, operator: '+' | '-' | '*' | '/', num2: number) {
      await this.enterNumber(num1);
      await this.performOperation(operator);
      await this.enterNumber(num2);
      await this.calculate();
    }
  });
}