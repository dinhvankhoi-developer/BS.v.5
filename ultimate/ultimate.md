# Lệnh nâng cao cuối cùng trong bootstraps :

1. màu nền :
   -- bg-color-opacity - $ (0 , 10 , 25 , 50 , 75 , 100)
   --bg-gradient-color - $

2. border :
   -- cấu trúc như sau :
   -- nếu 1 viền : thì => border-top border-3
   -- trừ 1 viền : => border border-top-0
   [

   # border border-top-0 border-3 border-danger border-opacity-25

   ]

3. flexbox :
   -- xác định flex cha :
   -- gap -$
   -- d-flex
   -- flex-row-column
   -- flex-wrap
   -- flex-justify-contents
   -- flex-align-items
   -- xác định flex con :
   -- align-self
   -- flex-pill
   -- flex-grow
   -- flex-shrink
   -- flex order
   --ms-auto => end.
   -- me-auto => start
   # align-content ( dùng được khi có nhiều item )
   # khi dùng flexbox trong bootstrap thì thiết lập như sau :
   -- flex phải đặt lồng bên trong class => row => .col-$
