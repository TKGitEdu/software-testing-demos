Feature('Calculator App');


Scenario('phép Cộng 1 + 2 = 3 ', ({ I }) => {
 
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button1")');
I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonAdd")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button2")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('3');
});
Scenario('phép Trừ 15 - 2 = 13 ', ({ I }) => {
 
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button1")');
    I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button5")');
I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonSubtract")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button2")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('13');
});
Scenario('phép Nhân 100 * 2 =200 ', ({ I }) => {
 
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button1")');

  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonMultiply")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button2")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('200');
});
Scenario('phép Chia 85 / 5 =17 ', ({ I }) => {
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button8")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button5")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonDivide")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button5")');   
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('17');
});
Scenario('tesc C ', ({ I }) => {
 
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button1")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonAdd")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button2")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonClear")');
  
  I.see('0');
});
// thêm test
// ...existing code...

Scenario('phép Cộng 100 + 2 = 102', ({ I }) => {
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button1")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonAdd")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button2")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('102');
});

Scenario('phép Chia 100 / 0 báo lỗi', ({ I }) => {
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button1")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonDivide")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/button0")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('Error'); // hoặc thông báo lỗi phù hợp với app của bạn, ví dụ: 'Không hợp lệ'
});

Scenario('nhập thiếu toán hạng trả về 0', ({ I }) => {
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonAdd")');
  I.click('android=new UiSelector().resourceId("com.example.myapplication:id/buttonEquals")');
  I.see('0'); // hoặc thông báo lỗi phù hợp với app của bạn
});

// ...existing code...