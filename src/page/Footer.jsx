import React from 'react'

function footer() {
    return (
        <div className=' bg-gray-800'>
            <footer className=' px-9 py-4 bg-gray-800 text-white mx-10'>
                <div className=' flex justify-between'>
                    <ul>
                        <dt>Product</dt>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                    </ul>
                    <ul>
                        <dt>Resources</dt>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                    </ul>
                    <ul>
                        <dt>Community</dt>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                    </ul>
                    <ul>
                        <dt>Help</dt>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                        <dd>NA</dd>
                    </ul>
                </div>
                <p>©2025 PHH, Inc, All right reserved</p>
                <div className=' flex gap-2 justify-center '>
                    <a href="" className=' text-black'><i class="fa-brands fa-facebook"></i></a>
                    <a href="" className=' text-black'><i class="fa-brands fa-instagram"></i></a>
                    <a href="" className=' text-black'><i class="fa-brands fa-tiktok"></i></a>
                    <a href="" className=' text-black'><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default footer