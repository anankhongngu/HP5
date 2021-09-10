$(function(){
    if (localStorage.getItem("template") === null) {
        localStorage.setItem('template', 'vi');
    }
    const url = window.location.href;
    $('.lang__vi').on('click', function(){
        window.location = url;
        localStorage.setItem('template', 'vi');
    })
    $('.lang__en').on('click', function(){
        window.location = url;
        localStorage.setItem('template', 'en');
    });
    const menuleft = $('.menu-left-pc');
    const menuright = $('.menu-right-pc');
    const app = {
        menuvileft: [{
            menu: 'Giới thiệu',
            link: '/'
        },{
            menu: 'Vị trí',
            link: '/'
        },{
            menu: 'Tiện ích',
            link: '/'
        },{
            menu: 'Mặt bằng',
            link: '/'
        }],
        menuviright: [{
            menu: 'Căn hộ',
            link: '/'
        },{
            menu: 'Cơ hội đầu tư',
            link: '/'
        },{
            menu: 'Tin tức',
            link: '/'
        },{
            menu: 'Liên hệ',
            link: '/'
        }],
        introduce: [{
            title: 'Liệu pháp không gian sống "Thời đại lo âu',
            desc: 'Green Star Sky Garden không đơn thuần của một căn hộ để ở, đây được xem như tuyệt tác độc bản là nơi khởi nguồn đặc quyền về một cuộc sống: Thanh lọc cơ thể - Bảo vệ sức khoẻ - Khơi nguồn năng lượng thể chất lẫn tinh thần'
        }],
        ecological: [{
            titleimg: './assets/images/banner/titi-sinhthai.png'
        }],
        ecologicalcontent: [{
            image: './assets/images/banner/group1.jpg',
            link:'/',
            title: 'Cư dân dự án được thoả sức hoà mình trong hệ thống mảng xanh nội khu theo phương đứng đẳng cấp, giúp điều hoà nhiệt độ toàn khu với Công viên Luna park hơn 6.000m2, hồ thiên đường lãng mạn hơn 3.000m2 và hệ thống vườn treo thác nước len lõi trong mỗi toà nhà.',
            number: './assets/images/banner/1.png'
        },{
            image: './assets/images/banner/group2.png',
            link:'/',
            title: 'Mỗi căn hộ đều được tối ưu hoá mặt thoáng với nhiều cửa sổ mở rộng tầm view thoáng đãng giúp đón ánh sáng và không khí trong lành vào ngôi nhà của bạn.',
            number: './assets/images/banner/2.png'
        },{
            image: './assets/images/banner/group3.png',
            link:'/',
            title: 'Cư dân dự án được thoả sức hoà mình trong hệ thống mảng xanh nội khu theo phương đứng đẳng cấp, giúp điều hoà nhiệt độ toàn khu với Công viên Luna park hơn 6.000m2, hồ thiên đường lãng mạn hơn 3.000m2 và hệ thống vườn treo thác nước len lõi trong mỗi toà nhà. ',
            number: './assets/images/banner/3.png'
        },{
            image: './assets/images/banner/group4.png',
            link:'/',
            title: 'Với góc nhìn từ các căn hộ trên cao, cư dân được chiêm ngưỡng vẻ đẹp bình yên và thư thái của cỏ cây sông nước bao bọc xung quanh bởi KĐT Phú Mỹ Hưng được quy hoạch tiêu chuẩn và bài bản bậc nhất.',
            number: './assets/images/banner/4.png'
        }],
        locationOne: [{
            imglocation: './assets/images/banner/vi-tri.png',
            titletext: 'Kết nối thông suốt',
            content1: 'Toạ lạc tại vị trí đắt giá trên 2 trục đường huyết mạch Nguyễn Lương Bằng nối dài. Đây là cung đường thương mại, tài chính “triệu đô” sầm uất bậc nhất NSG, liền kề Phú Mỹ Hưng.',
            content2: 'Tại Green Star Sky Garden vừa đủ gần để 1 bước chân xuống phố, vừa đủ cách biệt để cư dân tận hưởng sự yên bình đặc quyền.',
            map: './assets/images/banner/map.png'
        }],
        locationTwo: [{
            imglocation2: './assets/images/banner/tien-ich.png',
            title: 'Đặc quyền giá trị'
        }],
        video: [{
            imgvideo: './assets/images/banner/thiet-ke.png',
            title: 'Trọn vẹn từng khoảng khắc',
            subtitle:'Những đường nét thiết kế nhằm mang đến một sự thỏa mãn không chỉ về thị giác mà ở đó mọi giác quan đều được đánh thức ở mức tối đa, tạo nên một bản nhạc tuyệt vời cho gia đình bạn.'
        }],
        timeline1: [{
            time: '0 - 5 phút',
            content1: 'Đại lộ Nguyễn Văn Linh',
            content2: 'BV Pháp Việt',
            content3: 'BV Tâm Đức',
            content4: 'UBND Quận 7',
            content5: 'TTTM Crescent mall',
            content6: 'Tuyến Metro số 4',
            content7: 'Trung tâm SECC',
            content8: 'Bưu điện Quận 7'
        }],
        timeline2: [{
            time: '5 - 10 phút',
            content1: 'ĐH RMIT',
            content2: 'ĐH Tôn Đức Thắng',
            content3: 'Cầu Phú Mỹ',
            content4: 'TTTM Lotte Mart',
            content5: 'TTTM SC VIVO'
        }],
        timeline3: [{
            time: '10 - 20 phút',
            content1: 'Chợ Bến Thành',
            content2: 'TTTM Bitexco',
            content3: 'Cao tốc Long Thành – Dầu Giây',
            content4: 'Cao tốc Bến Lức - Long Thành'
        }],
        tienich: [{
            image: './assets/images/utilities/banner-1.png',
            title: 'Hồ bơi sky view'
        },{
            image: './assets/images/utilities/banner-2.png',
            title: 'Công viên Luna Park hơn 6000 m2'
        },{
            image: './assets/images/utilities/banner-3.png',
            title: 'Hồ thiên đường hơn 3000 m2 '
        },{
            image: './assets/images/utilities/banner-4.png',
            title: 'Tổ hợp vườn treo thác nước trong nhà'
        },{
            image: './assets/images/utilities/banner-5.png',
            title: 'Hồ tắm khoáng nóng onsen'
        }],
        titlempp: [{
            title:'Mặt bằng'
        }],
        titletab: [{
            tab0:'Mặt bằng tổng thể ',
            tab1: 'Tầng 1',
            tab2: 'Tầng 2',
            tab3: 'Tầng 3',
            tab4: 'Tầng 4',
            tab5: 'Tầng 5',
            tab6: 'Tầng điển hình',
        }],
        investment: [{
            tab0: 'Vị thế vàng',
            img0: './assets/images/investment/icon-1.png',
            tab1: 'dịch vụ all-in-one',
            img1: './assets/images/investment/icon-2.png',
            tab2: 'Giá trị BĐS gia tăng theo thời gian',
            img2: './assets/images/investment/icon-3.png',
            tab3: 'Sức bật hạ tầng',
            img3: './assets/images/investment/icon-4.png',
            tab4: 'Cam kết vàng từ CĐT',
            img4: './assets/images/investment/icon-4.png',
        }],
        investmentcontent0: [{
            content: 'Dự án sở hữu vị trí vàng hiếm hoi còn lại toạ lạc tại cung đường Nguyễn Lương Bằng - Tuyến phố tài chính sầm uất của toàn khu Nam Sài Gòn. Một trong những tuyến đường có giá trị gia tăng “chóng mặt” không khác gì những khu trung tâm TP (tăng ít nhất 83% trong 2 năm qua) cùng tỉ suất cho thuê ổn định Hệ sinh thái ',
        }],
        investmentcontent1: [{
            content: 'Ngoài tiện ích nội khu, trong bán kính 150m-800m là hệ sinh thái dịch vụ đáp ứng mọi nhu cầu của cư dân: hệ thống Ngân hàng, siêu thị và các cửa hàng F&B nối tiếp nhau. Dọc theo 3km của tuyến đường là hàng loạt các hạ tầng xã hội hoàn thiện: Bệnh viện (Tâm Đức, FV, Gia Khang), trung tâm tiêm chủng VNVC… Chuỗi trường học đa quốc gia – đa cấp bậc, cùng các trung tâm đào tạo năng khiếu - TDTT.',
        }],
        investmentcontent2: [{
            content: 'Giữa thời điểm khan hiếm nguồn cung căn hộ nhưng nhu cầu sở hữu BĐS tại TP.HCM còn rất lớn. Với vị trí ấn tượng, The Peak Garden được xem như một kênh đầu tư cực hấp dẫn cho thị trường BĐS hạng sang tại khu trung tâm sầm uất NSG, nhờ cơ hội gia tăng giá trị BĐS vượt trội theo thời gian',
        }],
        investmentcontent3: [{
            content: 'Hàng loạt công trình hạ tầng trọng điểm tại NSG đang được đẩy mạnh triển khai tạo sức bật lớn trong tiềm năng gia tăng giá trị của The Peak Garden trong tương lai gần: Hệ thống hầm chui, cầu vượt tại ngã tư Nguyễn Văn Linh - Nguyễn Hữu Thọ, cầu Thủ Thiêm 3 tổng VĐT 3,100 tỷ đồng, cầu Thủ Thiêm 4 tổng VĐT 5,200 tỷ đồng, cùng hàng loạt các công trình hạ tầng giao thông trọng điểm khác',
        }],
        investmentcontent4: [{
            content: 'Cam kết mua lại sản phẩm với tỷ suất sinh lời hấp dẫn lên đến 14 %|năm. Đây được xem như một bảo chứng đắt giá về tiềm năng gia tăng giá trị cho The Peak Garden trong tương lai gần.',
        }],
        titleinvestment: [{
            title: 'CƠ HỘI ĐẦU TƯ',
        }],
        titleinews: [{
            title: 'Tin tức',
        }],
        notecopyright: [{
            content: 'Thông tin, hình ảnh các tiện ích trong website này chỉ mang tính chất tương đối và có thể được điều chỉnh theo quyết định của Chủ đầu tư tại từng thời điểm đảm bảo phù hợp quy hoạch và thực tế thi công của Dự án. Các thông tin, cam kết chính thức sẽ được quy định cụ thể tại Hợp đồng mua bán. Việc quản lý, vận hành và kinh doanh dự án sẽ theo quy định của Ban Quản Lý',
        }],
        form: [{
            title: 'ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN',
            name: 'Họ tên:',
            email: 'Email',
            phone: 'Số điện thoại:',
            mess: 'Lời nhắn:',
            btn: 'Đăng ký'
        }],
        partnertitle: [{
            title: 'ĐỐI TÁC DỰ ÁN',
        }],
        renderMenuLeftVi: function() {
            const htmlmenu = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuleft.html(htmlmenu.join(''));
        },
        renderMenuRightVi: function() {
            const htmls = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuright.html(htmls.join(''));
        },
        renderAllVi: function() {
            const htmlintro = this.introduce.map(intro => {
                return `<div class="banner_title title-introduce">
                            <h4>${intro.title}</h4>
                        </div>
                        <div class="banner_subtitle">
                            <p>${intro.desc}</p>
                        </div>`
            })
            //sinh thai
            const htmlsttt = this.ecological.map(sttt => {
                return `<a>
                            <img class="lazyload" width="582" height="140" data-src="${sttt.titleimg}" alt="icon title" />
                        </a>`
            })
            const htmlstcontent = this.ecologicalcontent.map(stct => {
                return `<div class="item_content col-xs-100">
                            <div class="item_content--banner">
                                <a href="${stct.link}">
                                    <img class="lazyload" width="488" height="255" data-src="${stct.image}" alt="banner">
                                </a>
                            </div>
                            <div class="item_content--text">
                                <div class="c-text-img">
                                    <a href="${stct.link}">
                                        <img class="lazyload" width="75" height="163" data-src="${stct.number}" alt="">
                                    </a>
                                </div>
                                <span>${stct.title}</span>
                            </div>
                        </div>`
            })

            //locationOne: locationOne
            const htmllocationOne = this.locationOne.map(location => {
                return `<div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="grid_lct__content">
                                <div class="lct_title">
                                    <a>
                                        <img class="lazyload" width="398" height="89" data-src="${location.imglocation}" alt="icon title" />
                                    </a>
                                </div>
                                <div class="lct_item-content">
                                    <div class="lct_item_title">
                                        <h4>${location.titletext}</h4>
                                    </div>
                                    <div class="lct_item_text">
                                        <p>${location.content1}</p>
                                        <p>${location.content2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="wrapper-map">
                                <img class="lazyload" width="827" height="590" data-src="${location.map}" alt="map">
                                <div class="dot-ani">
                                    <div class="suntory-alo-ph-circle"></div>
                                    <div class="suntory-alo-ph-circle-fill"></div>
                                    <div class="suntory-alo-ph-img-circle hide"></div>

                                </div>
                            </div>
                        </div>`
            })
            //locationTwo
            const htmllocationTwo = this.locationTwo.map(location2 => {
                return `<a>
                            <img class="lazyload" width="534" height="120" data-src="${location2.imglocation2}" alt="icon title" />
                        </a>
                        <h4>${location2.title}</h4>`
            })
            //video
            const htmlvideo = this.video.map(itemvid => {
                return `<a>
                            <img class="lazyload" width="501" height="120" data-src="${itemvid.imgvideo}" alt="icon title" />
                        </a>
                        <h4>${itemvid.title}</h4>`
            })
            const htmlsubvd = this.video.map(itemvid => {
                return `<p>${itemvid.subtitle}</p>`
            })
            //timeline
            const htmltimeline1 = this.timeline1.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                                <li>${item.content6}</li>
                                <li>${item.content7}</li>
                                <li>${item.content8}</li>
                            </ul>
                        </div>`
            });
            //timeline 2
            const htmltimeline2 = this.timeline2.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                            </ul>
                        </div>`
            });
            //timeline
            const htmltimeline3 = this.timeline3.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                            </ul>
                        </div>`
            });
            //tien ich
            const htmltienich = this.tienich.map(item => {
                return `<div class="card">
                            <div>
                                <a href="#" class="sliderLink">
                                    <img class="lazyload" height="600" data-src="${item.image}">
                                    <span>${item.title}</span>
                                </a>
                            </div>
                        </div>`
            });
            //titlempp
            const htmltitlempp = this.titlempp.map(item => {
                return `<h4>${item.title}</h4>`;
            })
            //titletab
            const htmltitletab = this.titletab.map(item => {
                return `<button class="htp-tablink active" data-id="htp-tab-0">${item.tab0}</button>
                <button class="htp-tablink" data-id="htp-tab-1">${item.tab1}</button>
                <button class="htp-tablink" data-id="htp-tab-2">${item.tab2}</button>
                <button class="htp-tablink" data-id="htp-tab-3">${item.tab3}</button>
                <button class="htp-tablink" data-id="htp-tab-4">${item.tab4}</button>
                <button class="htp-tablink" data-id="htp-tab-5">${item.tab5}</button>
                <button class="htp-tablink" data-id="htp-tab-6">${item.tab6}</button>`
            });
            //investment
            const htmlinves = this.investment.map(item => {
                return `<button class="htp-tablink-inv ic-0" data-id="htp-tab-inv-0">
                            <div class="icon-pos">
                                <span class="icon-iven "><img class="lazyload" data-src="${item.img0}" alt="icon"/></span>
                                <span class="title-iven">${item.tab0}</span>
                            </div>  
                        </button>
                        <button class="htp-tablink-inv ic-1" data-id="htp-tab-inv-1">
                            <div class="icon-pos">
                                <span class="icon-iven "><img class="lazyload" data-src="${item.img1}" alt="icon"/></span>
                                <span class="title-iven">${item.tab1}</span>
                            </div>  
                        </button>
                        <button class="htp-tablink-inv ic-2 active" data-id="htp-tab-inv-2">
                            <div class="icon-pos">
                                <span class="icon-iven "><img class="lazyload" data-src="${item.img2}" alt="icon"/></span>
                                <span class="title-iven">${item.tab2}</span>
                            </div>
                        </button>
                        <button class="htp-tablink-inv ic-3" " data-id="htp-tab-inv-3 ">
                            <div class="icon-pos ">
                            <span class="icon-iven "><img class="lazyload" data-src="${item.img3}" alt="icon "/></span>
                            <span class="title-iven ">${item.tab3}</span>
                        </div>
                        </button>
                        <button class="htp-tablink-inv ic-4 " data-id="htp-tab-inv-4 ">
                            <div class="icon-pos ">
                            <span class="icon-iven "><img class="lazyload" data-src="${item.img4}" alt="icon "/></span>
                            <span class="title-iven ">${item.tab4}</span>
                        </div>
                        </button>`
            });
            //investmentcontent0
            const htmltabin0 = this.investmentcontent0.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent1
            const htmltabin1 = this.investmentcontent1.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent2
            const htmltabin2 = this.investmentcontent2.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent3
            const htmltabin3 = this.investmentcontent3.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent4
            const htmltabin4 = this.investmentcontent4.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //titleinvestment
            const htmltitleinvestment = this.titleinvestment.map(item => {
                return `<h4>${item.title}</h4>`;
            });
            //titleinews
            const htmltitlenews = this.titleinews.map(item => {
                return `<h4>${item.title}</h4>`;
            });
            //notecopyright
            const htmlnoteconte = this.notecopyright.map(item => {
                return `<p>${item.content}</p>`;
            });
            //form
            const htmlfrtitle = this.form.map(item => {
                return `${item.title}`;
            });
            const htmlfrname = this.form.map(item => {
                return `${item.name}`;
            });
            const htmlfrphone = this.form.map(item => {
                return `${item.phone}`;
            });
            const htmlfremail = this.form.map(item => {
                return `${item.phone}`;
            });
            const htmlfrnote = this.form.map(item => {
                return `${item.mess}`;
            });
            const htmlfrbtn = this.form.map(item => {
                return `${item.btn}`;
            });
            //partnertitle
            const htmltitlepart = this.partnertitle.map(item => {
                return `<h4>${item.title}</h4>`;
            });

            //render
            $('.item-banner-content').html(htmlintro.join(''));
            $('.sth_title').html(htmlsttt.join(''));
            $('.sth_item-content').html(htmlstcontent.join(''));
            $('.wrapper-section-location').html(htmllocationOne.join(''));
            $('.ultili_title').html(htmllocationTwo.join(''));
            $('.video_title').html(htmlvideo.join(''));
            $('.grid_video__content .subtitle-content').html(htmlsubvd.join(''));
            $('.slide-timeline-1').html(htmltimeline1.join(''));
            $('.slide-timeline-2').html(htmltimeline2.join(''));
            $('.slide-timeline-3').html(htmltimeline3.join(''));
            $('#slider-slick-home').html(htmltienich.join(''));
            $('.htp-tablinks-el').html(htmltitletab.join(''));
            $('.grid_sth__content .place-title').html(htmltitlempp.join(''));
            $('.htp-tablinks-investment').html(htmlinves.join(''));
            $('.htp-tabcontents-investment .tab0.htp-tabcontent-inv').html(htmltabin0.join(''));
            $('.htp-tabcontents-investment .tab1.htp-tabcontent-inv').html(htmltabin1.join(''));
            $('.htp-tabcontents-investment .tab2.htp-tabcontent-inv').html(htmltabin2.join(''));
            $('.htp-tabcontents-investment .tab3.htp-tabcontent-inv').html(htmltabin3.join(''));
            $('.htp-tabcontents-investment .tab4.htp-tabcontent-inv').html(htmltabin4.join(''));
            $('.homepage-banner-investment .item-banner .title').html(htmltitleinvestment.join(''));
            $('.new--head .new-title').html(htmltitlenews.join(''));
            $('.ft_description').html(htmlnoteconte.join(''));
            $('.pnewle-form h3.text-center').html(htmlfrtitle.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfrphone.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfrname.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfremail.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfrnote.join(''));
            $('.pnewle-form button.btn-outline').html(htmlfrbtn.join(''));
            $('.brand-title').html(htmltitlepart.join(''));
        
        },
        start: function() {
            this.renderMenuLeftVi();
            this.renderMenuRightVi();
            this.renderAllVi();
        }
    }

/*=========================== NỘI DUNG TIẾNG ANH ===================================== */
    const appen = {
        menuvileft: [{
            menu: 'About us',
            link: '/'
        },{
            menu: 'Location',
            link: '/'
        },{
            menu: 'Utilities',
            link: '/'
        },{
            menu: 'Plane',
            link: '/'
        }],
        menuviright: [{
            menu: 'Apartment',
            link: '/'
        },{
            menu: 'Investment Opportunities',
            link: '/'
        },{
            menu: 'News',
            link: '/'
        },{
            menu: 'Contacts',
            link: '/'
        }],
        introduce: [{
            title: 'Spatial Therapy "Anxiety Age"',
            desc: 'The Peak Garden is not just an apartment to live in, this is considered as a unique masterpiece and the originate of privileged: Purifying Body - Protecting Health - Unleashing Physical and Mental Energy '
        }],
        ecological: [{
            titleimg: './assets/images/title-en/2.png'
        }],
        ecologicalcontent: [{
            image: './assets/images/banner/group1.jpg',
            link:'/',
            title: 'Inside each Wellness Apartment is equipped with an air purifier system, infrared heating lamp, antibacterial paint, etc. to help purify and perfectly protect the health of the owner.',
            number: './assets/images/banner/1.png'
        },{
            image: './assets/images/banner/group2.png',
            link:'/',
            title: 'Each apartment has many windows to widen the view for catching shining and fresh air into the house.',
            number: './assets/images/banner/2.png'
        },{
            image: './assets/images/banner/group3.png',
            link:'/',
            title: 'Residents can freely immerse themselves in the high-class vertical internal green system, helping to regulate the temperature of the whole area with Luna park over 6,000m2, romantic paradise lake over 3,000m2, and hanging waterfall garden system in each building.',
            number: './assets/images/banner/3.png'
        },{
            image: './assets/images/banner/group4.png',
            link:'/',
            title: 'With the view from the high floor apartments, residents can admire the peaceful sightseeings with trees and rivers surrounded by the most standard living urban - Phu My Hung area.',
            number: './assets/images/banner/4.png'
        }],
        locationOne: [{
            imglocation: './assets/images/title-en/3.png',
            //titletext: 'Kết nối thông suốt',
            content1: 'Located in an expensive location on two extended arterial Nguyen Luong Bang roads. This is the busiest "million-dollar" commercial and financial street in Nam Sai Gon, adjacent to Phu My Hung area.',
            content2: "At The Peak Garden, it's close to being one step down the street and far enough away barely to enjoy the privileged peace.",
            map: './assets/images/banner/map.png'
         }],
         locationTwo: [{
            imglocation2: './assets/images/title-en/4.png',
            title: 'Đặc quyền giá trị'
        }],
        video: [{
            imgvideo: './assets/images/title-en/6.png',
            title: 'Living in the moment',
            subtitle:'The design lines are intended to bring not only visual satisfaction but where all senses are fully awakened, creating a wonderful rhythm for your family.'
        }],
        timeline1: [{
            time: '0 - 5 Minute',
            content1: 'Nguyen Van Linh Avenue',
            content2: 'FV Hospital',
            content3: 'Tam Duc Hospital',
            content4: "People's Committee of District 7",   
            content5: 'Crescent Mall Shopping Center',
            content6: 'Metro 4',
            content7: 'Saigon Exhibition and Convention Center / SECC',
            content8: 'Post Office District 7'
        }],
        timeline2: [{
            time: '5 - 10 Minute',
            content1: 'RMIT University',
            content2: 'Ton Duc Thang University',
            content3: 'Phu My Bridge',
            content4: 'Lotte Mart',
            content5: 'SC VivoCity mall'
        }],
        timeline3: [{
            time: '10 - 20 Minute',
            content1: 'Ben Thanh Market',
            content2: 'Bitexco Tower',
            content3: 'Long Thanh – Dau Giay Expressway',
            content4: 'Ben Luc - Long Thanh Expressway'
        }],
        tienich: [{
            image: './assets/images/utilities/banner-1.png',
            title: 'Sky view swimming pool'
        },{
            image: './assets/images/utilities/banner-2.png',
            title: 'Luna Park over 6000 m2'
        },{
            image: './assets/images/utilities/banner-3.png',
            title: 'Paradise Lake over 3000 m2'
        },{
            image: './assets/images/utilities/banner-4.png',
            title: 'The complex of hanging gardens with waterfalls inside the building'
        },{
            image: './assets/images/utilities/banner-5.png',
            title: 'Onsen hot spring bath'
        }],
        titlempp: [{
            title:'Floor plan'
        }],
        titletab: [{
            tab0:'Master Plan',
            tab1: '1st Floor Plan',
            tab2: '2nd Floor Plan',
            tab3: '3rd Floor Plan',
            tab4: '4th Floor Plan',
            tab5: '5th Floor',
            tab6: 'Layout Floor',
        }],
        investment: [{
            tab0: 'Golden Location',
            img0: './assets/images/investment/icon-1.png',
            tab1: 'All-in-one service:',
            img1: './assets/images/investment/icon-2.png',
            tab2: 'The value increases like wildfire',
            img2: './assets/images/investment/icon-3.png',
            tab3: 'A great infrastructure bounce',
            img3: './assets/images/investment/icon-4.png',
            tab4: 'The Gold commitment from the Investor',
            img4: './assets/images/investment/icon-4.png',
        }],
        investmentcontent0: [{
            content: 'Owning the rare remaining golden position, located at Nguyen Luong Bang road – the financial street of Nam Sai Gon area. This is one of the "vertical" value-added routes (increasing at least 83% in the past 2 years) with a stable rental rate',
        }],
        investmentcontent1: [{
            content: 'Besides internal utilities, there’s a service ecosystem within a radius of 150m-800m to meet all the needs of residents: a banking system, a supermarket, and F&B stores in succession. Along 3km of the route is a series of completed social infrastructures: Hospitals (Tam Duc, FV, Gia Khang), VNVC vaccination center… multi-national and multi-level school, and centers talent sports training.',
        }],
        investmentcontent2: [{
            content: 'Despite the scarcity of apartment supply, the demand for real estate ownership in Ho Chi Minh City is still very large. With an impressive location, The Peak Garden is an extremely attractive channel investment for the luxury real estate market in the Nam Sai Gon area with increasing outstanding value over time.',
        }],
        investmentcontent3: [{
            content: 'A series of key infrastructure projects at NSG has been being promoted, creating a great bounce for The Peak in the near future: Underpass system, the overpass at the intersection of Nguyen Van Linh - Nguyen Huu Tho road, Thu Thiem 3 bridge with a total investment of 3,100 billion VND, Thu Thiem 4 bridge with a total investment of 5,200 billion VND, and a series of other key transport infrastructure projects.',
        }],
        investmentcontent4: [{
            content: 'Commit to buy back products with attractive profit rates up to 14% | year. This is considered an expensive guarantee for the potential of The Peak Garden to increase its value in the future.',
        }],
        titleinvestment: [{
            title: 'INVESTMENT OPPORTUNITIES',
        }],
        titleinews: [{
            title: 'News',
        }],
        notecopyright: [{
            content: "Information and images of utilities in this website are photographic images and can be adjusted at the discretion of the Investor at a specific time to ensure compliance with the project's planning and actual construction. The official information and commitments will be specified in the Sales Contract. The management, operation, and business of the project will follow the regulations of the Project Management Board"
        }],
        form: [{
            title: 'GET PROJECT INFORMATION HERE',
            name: 'Name:',
            email: 'Email',
            phone: 'Phone:',
            mess: 'Notes:',
            btn: 'Register'
        }],
        partnertitle: [{
            title: 'Partner',
        }],
        renderMenuLeftEn: function() {
            const htmls = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuleft.html(htmls.join(''));
        },
        renderMenuRightEn: function() {
            const htmls = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuright.html(htmls.join(''));
        },
        renderAllEn: function() {
            const htmlintro = this.introduce.map(intro => {
                return `<div class="banner_title title-introduce">
                            <h4>${intro.title}</h4>
                        </div>
                        <div class="banner_subtitle">
                            <p>${intro.desc}</p>
                        </div>`
            })
            //sinh thai
            const htmlsttt = this.ecological.map(sttt => {
                return `<a>
                            <img class="lazyload" width="582" height="140" data-src="${sttt.titleimg}" alt="icon title" />
                        </a>`
            })
            const htmlstcontent = this.ecologicalcontent.map(stct => {
                return `<div class="item_content col-xs-100">
                            <div class="item_content--banner">
                                <a href="${stct.link}">
                                    <img class="lazyload" width="488" height="255" data-src="${stct.image}" alt="banner">
                                </a>
                            </div>
                            <div class="item_content--text">
                                <div class="c-text-img">
                                    <a href="${stct.link}">
                                        <img class="lazyload" width="75" height="163" data-src="${stct.number}" alt="">
                                    </a>
                                </div>
                                <span>${stct.title}</span>
                            </div>
                        </div>`
            })
            //locationOne: locationOne
                const htmllocationOne = this.locationOne.map(location => {
                return `<div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="grid_lct__content">
                                <div class="lct_title">
                                    <a>
                                        <img class="lazyload" width="398" height="89" data-src="${location.imglocation}" alt="icon title" />
                                    </a>
                                </div>
                                <div class="lct_item-content">
                                    <div class="hide lct_item_title">
                                        <h4>${location.titletext}</h4>
                                    </div>
                                    <div class="lct_item_text">
                                        <p>${location.content1}</p>
                                        <p>${location.content2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="wrapper-map">
                                <img class="lazyload" width="827" height="590" data-src="${location.map}" alt="map">
                                <div class="dot-ani">
                                    <div class="suntory-alo-ph-circle"></div>
                                    <div class="suntory-alo-ph-circle-fill"></div>
                                    <div class="suntory-alo-ph-img-circle hide"></div>

                                </div>
                            </div>
                        </div>`
            })

            //
            //locationTwo
            const htmllocationTwo = this.locationTwo.map(location2 => {
                return `<a>
                            <img class="lazyload" width="534" height="120" data-src="${location2.imglocation2}" alt="icon title" />
                        </a>
                        <h4 class="hide">${location2.title}</h4>`
            })
            //video
            const htmlvideo = this.video.map(itemvid => {
                return `<a>
                            <img class="lazyload" width="501" height="120" data-src="${itemvid.imgvideo}" alt="icon title" />
                        </a>
                        <h4 class="hide">${itemvid.title}</h4>`
            })
            const htmlsubvd = this.video.map(itemvid => {
                return `<p>${itemvid.subtitle}</p>`;
            })
            //timeline
            const htmltimeline1 = this.timeline1.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                                <li>${item.content6}</li>
                                <li>${item.content7}</li>
                                <li>${item.content8}</li>
                            </ul>
                        </div>`
            });
            //timeline 2
            const htmltimeline2 = this.timeline2.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                            </ul>
                        </div>`
            });
            //timeline
            const htmltimeline3 = this.timeline3.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                            </ul>
                        </div>`
            });
            //tien ich
            const htmltienich = this.tienich.map(item => {
                return `<div class="card">
                            <div>
                                <a href="#" class="sliderLink">
                                    <img class="lazyload" height="600" data-src="${item.image}">
                                    <span>${item.title}</span>
                                </a>
                            </div>
                        </div>`
            });
            //titlempp
            const htmltitlempp = this.titlempp.map(item => {
                return `<h4>${item.title}</h4>`;
            })
             //titletab
             const htmltitletab = this.titletab.map(item => {
                return `<button class="htp-tablink active" data-id="htp-tab-1">${item.tab0}</button>
                <button class="htp-tablink" data-id="htp-tab-2">${item.tab1}</button>
                <button class="htp-tablink" data-id="htp-tab-2">${item.tab2}</button>
                <button class="htp-tablink" data-id="htp-tab-3">${item.tab3}</button>
                <button class="htp-tablink" data-id="htp-tab-4">${item.tab4}</button>
                <button class="htp-tablink" data-id="htp-tab-5">${item.tab5}</button>
                <button class="htp-tablink" data-id="htp-tab-6">${item.tab6}</button>`
            });
            //investment
            const htmlinves = this.investment.map(item => {
                return `<button class="htp-tablink-inv ic-0" data-id="htp-tab-inv-0">
                            <div class="icon-pos">
                                <span class="icon-iven "><img class="lazyload" data-src="${item.img0}" alt="icon"/></span>
                                <span class="title-iven">${item.tab0}</span>
                            </div>  
                        </button>
                        <button class="htp-tablink-inv ic-1" data-id="htp-tab-inv-1">
                            <div class="icon-pos">
                                <span class="icon-iven "><img class="lazyload" data-src="${item.img1}" alt="icon"/></span>
                                <span class="title-iven">${item.tab1}</span>
                            </div>  
                        </button>
                        <button class="htp-tablink-inv ic-2 active" data-id="htp-tab-inv-2">
                            <div class="icon-pos">
                                <span class="icon-iven "><img class="lazyload" data-src="${item.img2}" alt="icon"/></span>
                                <span class="title-iven">${item.tab2}</span>
                            </div>
                        </button>
                        <button class="htp-tablink-inv ic-3" " data-id="htp-tab-inv-3 ">
                            <div class="icon-pos ">
                            <span class="icon-iven "><img class="lazyload" data-src="${item.img3}" alt="icon "/></span>
                            <span class="title-iven ">${item.tab3}</span>
                        </div>
                        </button>
                        <button class="htp-tablink-inv ic-4 " data-id="htp-tab-inv-4 ">
                            <div class="icon-pos ">
                            <span class="icon-iven "><img class="lazyload" data-src="${item.img4}" alt="icon "/></span>
                            <span class="title-iven ">${item.tab4}</span>
                        </div>
                        </button>`
            });
            //investmentcontent0
            const htmltabin0 = this.investmentcontent0.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent1
            const htmltabin1 = this.investmentcontent1.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent2
            const htmltabin2 = this.investmentcontent2.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent3
            const htmltabin3 = this.investmentcontent3.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
            //investmentcontent4
            const htmltabin4 = this.investmentcontent4.map(item => {
                return `<div class="slider-tabcontent owl-carousel owl-theme owl-nav-style-1">
                            <div class="item ">
                                <div class="item__content ">
                                    ${item.content}
                                </div>
                            </div>
                        </div>`
            });
             //titleinvestment
            const htmltitleinvestment = this.titleinvestment.map(item => {
                return `<h4>${item.title}</h4>`;
            });
            //titleinews
            const htmltitlenews = this.titleinews.map(item => {
                return `<h4>${item.title}</h4>`;
            });
             //notecopyright
             const htmlnoteconte = this.notecopyright.map(item => {
                return `<p>${item.content}</p>`;
            });
            //form
            const htmlfrtitle = this.form.map(item => {
                return `${item.title}`;
            });
            const htmlfrname = this.form.map(item => {
                return `${item.name}`;
            });
            const htmlfrphone = this.form.map(item => {
                return `${item.phone}`;
            });
            const htmlfremail = this.form.map(item => {
                return `${item.phone}`;
            });
            const htmlfrnote = this.form.map(item => {
                return `${item.mess}`;
            });
            const htmlfrbtn = this.form.map(item => {
                return `${item.btn}`;
            });
            //partnertitle
            const htmltitlepart = this.partnertitle.map(item => {
                return `<h4>${item.title}</h4>`;
            });

            $('.item-banner-content').html(htmlintro.join(''));
            $('.sth_title').html(htmlsttt.join(''));
            $('.sth_item-content').html(htmlstcontent.join(''));
            $('.wrapper-section-location').html(htmllocationOne.join(''));
            $('.ultili_title').html(htmllocationTwo.join(''));
            $('.video_title').html(htmlvideo.join(''));
            $('.grid_video__content .subtitle-content').html(htmlsubvd.join(''));
            $('.slide-timeline-1').html(htmltimeline1.join(''));
            $('.slide-timeline-2').html(htmltimeline2.join(''));
            $('.slide-timeline-3').html(htmltimeline3.join(''));
            $('#slider-slick-home').html(htmltienich.join(''));
            $('.htp-tablinks-el').html(htmltitletab.join(''));
            $('.grid_sth__content .place-title').html(htmltitlempp.join(''));
            $('.htp-tablinks-investment').html(htmlinves.join(''));
            $('.htp-tabcontents-investment .tab0.htp-tabcontent-inv').html(htmltabin0.join(''));
            $('.htp-tabcontents-investment .tab1.htp-tabcontent-inv').html(htmltabin1.join(''));
            $('.htp-tabcontents-investment .tab2.htp-tabcontent-inv').html(htmltabin2.join(''));
            $('.htp-tabcontents-investment .tab3.htp-tabcontent-inv').html(htmltabin3.join(''));
            $('.htp-tabcontents-investment .tab4.htp-tabcontent-inv').html(htmltabin4.join(''));
            $('.homepage-banner-investment .item-banner .title').html(htmltitleinvestment.join(''));
            $('.new--head .new-title').html(htmltitlenews.join(''));
            $('.ft_description').html(htmlnoteconte.join(''));
            $('.pnewle-form h3.text-center').html(htmlfrtitle.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfrphone.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfrname.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfremail.join(''));
            $('.pnewle-form label.contactFormName').html(htmlfrnote.join(''));
            $('.pnewle-form button.btn-outline').html(htmlfrbtn.join(''));
            $('.brand-title').html(htmltitlepart.join(''));
        


        },
        start: function() {
            this.renderMenuLeftEn();
            this.renderMenuRightEn();
            this.renderAllEn();
        }
    }

    if(localStorage.getItem('template') == 'vi'){
        app.start();
    }
    if(localStorage.getItem('template') == 'en'){
        appen.start();
    }
   
})