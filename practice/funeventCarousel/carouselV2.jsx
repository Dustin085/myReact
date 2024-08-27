function Carousel() {
    const { useState, useRef, useEffect } = React;
    const [activeSlide, setActiveSlide] = useState(0);
    // 抓slideBox
    const slideBox = useRef();
    // Slide元件
    function Slide({ imgUrl }) {
        return <figure className="slide"><img src={imgUrl} alt="" /></figure>
    }
    // 用來製造slide的陣列
    let slideUrls = ["./images/slide1.jpg",
        "./images/slide2.jpg",
        "./images/slide3.jpg",
        "./images/slide4.jpg",
        "./images/slide5.jpg"]

    // useEffect只能在componet body內使用
    // 當activeSlide改變時，切換slide的active
    useEffect(() => {
        let slideArr = Array.from(slideBox.current.getElementsByClassName("slide"));
        switchActive(slideArr, activeSlide);
    }, [activeSlide]);

    // 控制按鈕元件
    function CtrlBtn({ num }) {
        const clickHandler = () => {
            // 改變slide目標
            setActiveSlide(num);
        };
        return <button type="button" className="ctrl-btn" onClick={clickHandler}></button>
    }
    let ctrlBtnArr = [1, 2, 3, 4, 5];

    return <>
        <div className="carousel">
            <div className="slide-box" ref={slideBox}>
                {
                    slideUrls.map((slideUrl, index) => {
                        return <Slide key={index} imgUrl={slideUrl} />
                    })
                }
            </div>
            <div className="ctrl-box">
                <button type="button" className="arrow arrow--prev" id="caro-prev-btn"></button>
                <div className="ctrl-btn-box">
                    {
                        ctrlBtnArr.map((key, index) => {
                            return <CtrlBtn key={key} num={index} />
                        })
                    }
                </div>
                <button type="button" className="arrow arrow--next" id="caro-next-btn"></button>
            </div>
        </div>
    </>
    // 切換active元素
    function switchActive(arrToSwitch, targetIndex) {
        arrToSwitch.forEach((arrEle) => {
            arrEle.classList.remove('active');
        });
        arrToSwitch[targetIndex].classList.add('active');
        // console.log("switched");
    }
}