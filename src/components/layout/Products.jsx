import React from 'react'
import productOne from '../assets/p1.png'
import productTwo from '../assets/p2.png'
import productThree from '../assets/p3.png'
import productFour from '../assets/p4.png'
import ProductTxt from '../ProductTxt'
import Flex from '../Flex'

const Products = () => {
    return (
        <>
            <Flex className={'justify-between'}>
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
            </Flex>

        </>
    )
}

export default Products