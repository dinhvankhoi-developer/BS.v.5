# Điểm ngắt trong bootstraps .

# Trong bootstraps , 1 hàng (row) luôn chiếm 12 cột , nếu chia lớn hơn 12 cột thì cột đó mặt định xuống dòng mới và chiếm số cột đã chỉ định .

1. điểm ngắt chia làm 5 điểm như sau :
   -- xs < 576px;
   -- sm < 768px;
   -- md < 992px;
   -- lg < 1200px;
   -- xl > 1200px;

2. container chứa nội dung :
   -- container-fluid => chiếm 100%
   -- container-responsive => chiếm theo điểm breakpoint

3. hệ thống gird trong bootstrap:
   -- khi chia layout dùng col-5 (số cột được chia theo điểm breakpoint) sau khi co nội dung lại dễ vỡ nội dung , cho nên thiết lập điểm ngắt cho điểm breakpoint

4. offset :
   --là tăng khoảng cách bên phải , trái tuỳ thuộc vào item
   cách sử dụng offset như sau :
   --offset là bên trong cột (col)

5. clearfix :
   --là thuộc tính xác định nội dung được căn chỉnh bên trái , phải , center
   --trái => float-left
   --phải => float-right
   --center => d-block mx-auto

6.gutters (máng xối) :
-- để sử dụng máng xối : phải xác định có nhiêu cột trong 1 hàng (row) . rồi dùng máng xối (g-\*)
--(g-\*) được đặt ở trong row , và mỗi cột phải có thẻ div chứa nội dung .
