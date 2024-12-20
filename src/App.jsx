import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from '../src/assets/logo.png'
import adsOne from '../src/assets/ads1.png'
import adsTwo from '../src/assets/ads2.png'
import adsThree from '../src/assets/ads3.png'
import productOne from '../src/assets/p1.png'
import productTwo from '../src/assets/p2.png'
import productThree from '../src/assets/p3.png'
import productFour from '../src/assets/p4.png'
import Menu from './components/Menu'
import Button from './components/Button'
import Heading from './components/Heading'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";
import { TbNumber2 } from "react-icons/tb";
import Heading2 from './components/Heading2'
import ProductTxt from './components/ProductTxt'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from './components/NextArrow'
import PrevArrow from './components/PrevArrow'



function App() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
  };
  var settingss = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <>
      
      {/* Menu-top Part Start */}
      <div className="bg-white border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[15%]">
              <Image imgSrc={Logo} imgAlt={"Image"} />
            </div>
            <div className="w-[65%]">
              <Flex className={"justify-center text-menuColor"}>
                <Menu menuTxt={"Home"} className={"hover:font-bold"} />
                <Menu menuTxt={"Shop"} className={"hover:font-bold"} />
                <Menu menuTxt={"About"} className={"hover:font-bold"} />
                <Menu menuTxt={"Contacts"} className={"hover:font-bold"} />
                <Menu menuTxt={"Journal"} className={"hover:font-bold"} />
              </Flex>
            </div>

          </Flex>
        </Container>
      </div>
      {/* Menu-top Part End */}


      {/* Menu Part Start */}
      <div className="bg-menuBg border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[20%]">
              <Flex className={"justify-start"}>
                <HiMiniBars3BottomLeft className='relative top-[2px] mr-1' />
                <Button btnName={"Shop by Category"} />
              </Flex>
            </div>
            <div className="w-[60%]">
              <form class="flex items-center justify-center relative">
                <input placeholder="Search Products" type="search" className='inline w-full border-0 bg-white py-3 pl-3 pr-3 leading-5 placeholder-gray-300 focus:outline-none' />
                <button type="submit" className='absolute right-4 top-0 bottom-0 text-xl'><IoSearch /></button>
              </form>
            </div>
            <div className="w-[20%]">
              <Flex className={"justify-end"}>
                <FaUser className='mr-5' />
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu Part End */}

      {/* Banner Part Start */}
      <Slider {...settings}>
        <div className="bg-banner bg-no-repeat bg-cover bg-center">
          <Container>
            <Flex className={"justify-start"}>
              <div className="w-1/2 ml-40 py-44">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
                <Heading2 className={"font-DMSans text-menuColor text-xl w-10/12 mt-4"}
                  text={"Up to #50%# sale for all furniture items!"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
              </div>
            </Flex>
          </Container>
        </div>
        <div className="bg-banner bg-no-repeat bg-cover bg-center">
          <Container>
            <Flex className={"justify-start"}>
              <div className="w-1/2 ml-40 py-44">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
                <Heading2 className={"font-DMSans text-menuColor text-xl w-10/12 mt-4"}
                  text={"Up to #50%# sale for all furniture items!"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
              </div>
            </Flex>
          </Container>
        </div>
        <div className="bg-banner bg-no-repeat bg-cover bg-center">
          <Container>
            <Flex className={"justify-start"}>
              <div className="w-1/2 ml-40 py-44">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
                <Heading2 className={"font-DMSans text-menuColor text-xl w-10/12 mt-4"}
                  text={"Up to #50%# sale for all furniture items!"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
              </div>
            </Flex>
          </Container>
        </div>

      </Slider>

      {/* Banner Part End */}

      {/* Information Part Start */}
      <div className="bg-white py-8 border-b border-gray-200">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[30%]">
              <Flex className={"items-center"}>
                <TbNumber2 className='pr-2 text-3xl' />
                <Heading as={"h4"} className={"font-DMSans text-[16px] text-menuColor"} text={"Two years warranty"} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={"items-center justify-center"}>
                <FaTruck className='pr-2 text-3xl' />
                <Heading as={"h4"} className={"font-DMSans text-[16px] text-menuColor"} text={"Two years warranty"} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={"items-center justify-end"}>
                <FaUndo className='pr-2 text-3xl' />
                <Heading as={"h4"} className={"font-DMSans text-[16px] text-menuColor"} text={"Two years warranty"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information Part End */}

      {/* Ads Part Start */}
      <div className="pt-40 pb-20">
        <Container>
          <Flex>
            <div className="w-1/2 relative mr-9">
              <Image imgSrc={adsOne} imgAlt={"Image"} />
              <div className="absolute bottom-14 left-10">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[39px]"} text={"Phones Sale"} />
                <Heading2 className={"font-DMSans text-base text-menuColor mt-4"}
                  text={"Up to #30%# sale for all Phones"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-10 text-white bg-black "} />
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative mb-9">
                <Image imgSrc={adsTwo} imgAlt={"Image"} />
                <Flex className={"justify-start"}>
                  <div className="absolute top-16 left-10">
                    <Heading as={"h1"} className={"font-DMSans font-bold text-[39px] "} text={"Electronics Sale"} />
                    <Heading2 className={"font-DMSans text-base text-menuColor mt-4"}
                      text={"Up to #70%# sale for all Electronics"} />
                    <Button btnName={"Shop Now"} className={"py-4 px-12 mt-10 text-white bg-black "} />
                  </div>
                </Flex>
              </div>
              <div className="relative">
                <Image imgSrc={adsThree} imgAlt={"Image"} />
                <Flex className={"justify-start"}>
                  <div className="absolute top-16 left-10">
                    <Heading as={"h1"} className={"font-DMSans font-bold text-[39px] "} text={"Furniture Offer"} />
                    <Heading2 className={"font-DMSans text-base text-menuColor mt-4"}
                      text={"Up to #50%# sale for all furniture items!"} />
                    <Button btnName={"Shop Now"} className={"py-4 px-12 mt-10 text-white bg-black "} />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}

      {/* Product Part Start */}
      <div className="py-20">
        <Container>
          <Heading as={"h1"} className={"font-DMSans capitalize text-[39px] pb-10 leading-9 font-bold"} text={"new arrival"} />
          <Slider {...settingss}>
            <ProductTxt
              badgeName={'New'}
              imgSrc={productOne}
              textOneH={'Add to Wish List'}
              textTwoH={'Compare'}
              textThreeH={'Add to Cart'}
              pHeadingTxt={'Basic Crew Neck Tee'}
              pPrice={'$44.00'}
              pColor={'Black'}
            />
            <ProductTxt
              badgeName={'New'}
              imgSrc={productTwo}
              textOneH={'Add to Wish List'}
              textTwoH={'Compare'}
              textThreeH={'Add to Cart'}
              pHeadingTxt={'Basic Crew Neck Tee'}
              pPrice={'$64.00'}
              pColor={'Black'}
            />
            <ProductTxt
              badgeName={'Update'}
              imgSrc={productThree}
              textOneH={'Add to Wish List'}
              textTwoH={'Compare'}
              textThreeH={'Add to Cart'}
              pHeadingTxt={'Basic Crew Neck Tee'}
              pPrice={'$54.00'}
              pColor={'Black'}
            />
            <ProductTxt
              badgeName={'New'}
              imgSrc={productFour}
              textOneH={'Add to Wish List'}
              textTwoH={'Compare'}
              textThreeH={'Add to Cart'}
              pHeadingTxt={'Basic Crew Neck Tee'}
              pPrice={'$34.00'}
              pColor={'Black'}
            />
          </Slider>
        </Container>
      </div>
      {/* Product Part End */}
    </>
  )
}
export default App
