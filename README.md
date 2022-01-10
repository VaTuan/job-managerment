# NextJs Concepts

# File-system routing

# CSR, SSR, SSG and ISR

1. Pre-rendering
2. SSG - Static Site Generation
3. SSR - Server Side Rendering
4. CSR - Client Side Rendering
5. ISR - Incremental Static Regeneration

### 1. Pre-rendering

- **Pre-rendering** có nghĩa là mình render sẵn các file HTML ở phía server
- Khi mà user get về thì đã có sẵn file HTML để nó show ra
- Sau đó load thêm Javascript .

Trong NextJs có 2 hình thức để Pre-rendering là _SSG (Static Site Generation)_ và _SSR (Server Side Rendering)_

- Hiện tại SSG khá là xịn , được khuyến khích bởi NextJs, TH về SSR sẽ càng ngày càng ít

### 2. SSG - Static Site Generation

- HTML is generated at **_build-time_**
- Mô tả : khi chạy yarn build (tại thời điểm build dự án) ==> build được sẵn những nội dung static. Khi mà user gửi request lên thì chỉ cần trả về cái file mà đã build sẵn,
  ==> Performance sẽ nhanh
- Được diễn ra trong giai đoạn **build-time** (tức là xảy ra trong thời điểm gõ lệnh _yarn build_)
  ==> Build 1 phát, cần gì trả về (đó là SSG)

### 3. SSR - Server Side Rendering

- HTML is generated on **_each request_**
- Mô tả : User gửi request lên ==> xử lí, gom/lấy dữ liệu ==> tạo ra file HTML ==> trả về cho user
- Cứ mỗi lẫn request lên là phải xử lí và tạo ra 1 file HTML
- Nếu có nhiều request thì server làm việc khá cực, tốn resource trên server.
- Tùy thuộc vào server tính toán nhanh hay chậm -> ảnh hưởng đến việc User đợi nhanh hay lâu -> đợi nhanh hay lâu thì chỉ số _time to first by_ sẽ càng lớn
  ==> theo mỗi request tạo ra 1 file HTML trả về (đó là SSR)

### 4. CSR - Client Side Rendering

- Client Side là khi sử dùng ReactJs với create-react-app
- Nó sẽ **không** render ở phía server, nó sẽ đợi client load Javascript rồi sau đó mới render lên

- Trong NextJs khi nhắc tới CSR thì có thể kết hợp giữa _SSG_ và _Fetch Data on Client Site_, hướng này sẽ làm cho những trường hợp mà: dữ liệu của mình không phải render sẵn bên phía server, không cần SEO, cho những private website(vd trang Admin,...)

### 5. ISR - Incremental Static Regeneration

- bản chất của nó là _dựa trên_ SSG nhưng được kết hợp thêm 1 option là **revalidate**

- Với NextJs thì mỗi trang có thể config 1 hình thức Pre-rendering khác nhau
- config sẽ phụ thuộc vào sự xuất hiện của 1 số hàm đặc biệt
Nếu dùng hàm **getServerSideProps** thì sẽ là dạng SSR, nếu không dùng thì sẽ là SSG
Nếu trong TH là SSG thì có TH sử dụng hoặc không sửa dụng hàm **getStaticProps**
Trong TH sử dụng **getStaticProps** mà dùng *revalidate* thì sẽ là **ISR** còn không thì sẽ là **SSG**

Tham khảo : https://drive.google.com/file/d/1YKvpah7EiEJido83nWIbA5pfu9O1amUR/v iew

## Automatic Static Optimization
- ở NextJs xác định 1 trang có phải là **static** hay không (có thể prerendered hay không) bằng cách xác định page đó có dùng hàm
*getServerSideProps* hay *getInitialProps* không,
- Nếu có dùng thì nó không phải là Automatic Static Optimization ==> không **pre-rendered** được 


## Code with SSG
có 3 TH sử dụng : 
1. Static HTML Generation thì không cần dùng
2. Static HTML + JSON Data     use   getStaticProps
3. Static HTML + JSON Data + Dynamic Routes    use getStaticProps + getStaticPaths