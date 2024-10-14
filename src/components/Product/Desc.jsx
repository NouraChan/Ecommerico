import { useState } from "react";

export default function Desc(product) {

    let [] = useState();


    function navTabs() {

        const tabBtn = document.querySelectorAll('.tabnonselected');
        const tabContent = document.querySelectorAll('.my-tab');

        tabBtn.forEach((dBtn, index) => {
            dBtn.addEventListener('click', () => {
                tabBtn.forEach(dBtn => dBtn.classList.remove('tabselected'));
                dBtn.classList.add('tabselected');

                tabContent.forEach(contentall => contentall.classList.remove('shown-tab'));
                tabContent[index].classList.add('shown-tab');
            })
        })


     }
    return <>
        <section>
            <div className="container-fluid pt-5 bg-light spacer my-5">
                <div className="">
                    <div className="mb-5 d-flex gap-3">
                        <button href="#" className="tabnonselected tabselected" id="day1Btn" onClick={navTabs}>
                            <h3 className="day fw-bolder fs-4 lh-lg">Detail</h3>
                        </button>
                        <button href="#" className="tabnonselected" id="day2Btn" onClick={navTabs}>
                            <h3 className="day fw-bolder fs-4 lh-lg">Warranty</h3>
                        </button>
                        <button href="#" className="tabnonselected" id="day3Btn" onClick={navTabs}>
                            <h3 className="day fw-bolder fs-4 lh-lg">Custom Engrave</h3>
                        </button>
                    </div>
                </div>
                <div classame="row justify-content-center my-5 pb-5">

                    <div classame="shown-tab col-9 my-4 my-tab">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates quas itaque quam laudantium labore amet tempora quo explicabo, laborum adipisci maiores ut aperiam, cupiditate reprehenderit molestias aspernatur ea debitis!</p>
                    </div>
                    <div classame="shown-tab col-9 my-4 my-tab"> 
                        <h4>Title</h4>
                        <p>Lue quam laudantium labore amet tempora quo explicabo, laborum adipisci maiores ut aperiam, cupiditate reprehenderit molestias aspernatur ea debitis!</p>
                  </div>
                    <div classame="shown-tab col-9 my-4 my-tab"> 
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet consect explicabo, laborutate reprehenderit molestias aspernatur ea debitis!</p>
                  </div>

                 
                </div>

            </div>








        </section>

    </>;
};
