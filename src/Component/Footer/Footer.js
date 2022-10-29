import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from '@mui/icons-material/Send';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.scss"
export default function Footer() {
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className='footer'>
            <div className="footer-content xl:container mx-auto">
                <div className="footer-top">
                    <div className="grid grid-cols-5 mw-100">
                        <div className="col-5 ml-4 mw-100">
                            <h1>Công ty chúng tôi</h1>
                            <ul>
                                <li>Giới thiệu</li>
                                <li>Việc làm</li>
                                <li>Báo chí/Truyền thông</li>
                                <li>Hợp tác đầu tư</li>
                                <li>Nội dung tìm kiếm phổ biến</li>
                            </ul>
                        </div>
                        <div className="col-5 ml-4 mw-100">
                            <h1>Ứng dụng và plug-in</h1>
                            <ul>
                                <li>Ứng dụng iOS</li>
                                <li>Ứng dụng Android</li>
                            </ul>
                            <h1>Đối tác</h1>
                            <ul>
                                <li>Nhà phát triển</li>
                                <li>Bên liên kết/Đại lý</li>
                                <li>Đại lý quốc tế</li>
                            </ul>

                        </div>
                        <div className="col-5 ml-4 mw-100">
                            <h1>Pháp lý</h1>
                            <ul>
                                <li>Điều khoản sử dụng của trang web</li>
                                <li>Điều khoản dịch vụ</li>
                                <li>Chính sách quyền riêng tư</li>
                                <li>Bản tuyên bố chống nô lệ hiện đại</li>
                            </ul>
                        </div>
                        <div className="col-5 ml-4 mw-100">
                            <h1>Liên hệ</h1>
                            <ul>
                                <li>Trợ giúp</li>
                            </ul>
                            <h1>Dịch vụ</h1>
                            <ul>
                                <li>Quyền và cấp quyền</li>
                                <li>Sự kiện</li>
                            </ul>
                        </div>
                        <div className="col-5 mw-100 input-value">
                            <div className="languge flex justify-between align-items-center pb-2">
                                <h1 className='w-3/6'>Ngôn ngữ</h1>
                                <FormControl sx={{ m: 1, width: 200, maxWidth: 200 }}>
                                    <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Tiếng Việt</MenuItem>
                                        <MenuItem value={20}>English</MenuItem>
                                        <MenuItem value={30}>France</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <h1>Nhập emal để được cập nhập các thông tin khóa học sớm nhất</h1>
                            <Box style={{ color: "white" }}
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Email nhập" id="fullWidth" />
                            </Box>
                            <Button className='mt-2' variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom flex justify-between">
                    <div className="footer-bottom-left">
                        <h1>© 2003-2022 Elearning, Inc.</h1>
                    </div>
                    <div className="footer-bottom-right">
                        <FacebookIcon className='icon-footer' />
                        <InstagramIcon className='icon-footer' />
                        <TwitterIcon className='icon-footer' />
                        <YouTubeIcon className='icon-footer' />
                    </div>

                </div>
            </div>
        </div >
    )
}
