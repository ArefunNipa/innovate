import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import { FaHeart, FaCodeCompare, FaCartShopping } from "react-icons/fa6";
import Badge from './Badge';

const ProductTxt = () => {
    return (
        <>
            <Badge badgeName={"new"}  className={"absolute top-5 left-5"}/>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 invisible group-hover:visible">
                <Flex className={"justify-end gap-x-3 items-center"}>
                    <Heading as={"h3"} className={"font-DMSans text-[16px] pb-2 text-menuColor hover:font-bold"} text={"Add to Wish List"} />
                    <FaHeart />
                </Flex>
                <Flex className={"justify-end gap-x-3 items-center"}>
                    <Heading as={"h3"} className={"font-DMSans text-[16px] pb-2 text-menuColor hover:font-bold"} text={"Compare "} />
                    <FaCodeCompare />
                </Flex>
                <Flex className={"justify-end gap-x-3 items-center"}>
                    <Heading as={"h3"} className={"font-DMSans text-[16px] text-menuColor hover:font-bold"} text={"Add to Cart"} />
                    <FaCartShopping />
                </Flex>
            </div>
        </>
    )
}

export default ProductTxt