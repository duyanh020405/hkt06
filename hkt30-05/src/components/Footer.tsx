import React from 'react'
import './Footer.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
        <div className='ngang'></div>
        <div className="footer">
                <table>
                    <tr>
                        <th>Chăm sóc khách hàng</th>
                        <th>Giới thiệu</th>
                        <th>Danh mục sản phẩm</th>
                        <th>Theo dõi chúng tôi</th>
                        <th>Đội ngũ phát triển</th>
                    </tr>
                    <tr>
                        <td>Trung tâm trợ giúp</td>
                        <td>Điều khoản</td>
                        <td>Thời trang</td>
                        <td><FaFacebook />Facebook</td>
                        <td style={{color:"red"}}>Trịnh Quốc Hai</td>
                    </tr>
                    <tr>
                        <td>Hướng dẫn mua hàng</td>
                        <td>Chính sách bảo mật</td>
                        <td>Đồ tiêu dùng</td>
                        <td><FaInstagram />Instargram</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Tuyển dụng</td>
                        <td>Thiết bị điện tử</td>
                        <td><FaTwitter />Twitter</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Sách</td>
                    </tr>
                </table>
            </div>
      
    </div>
  )
}
