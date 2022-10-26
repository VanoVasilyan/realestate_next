import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const onWheel = ({ scrollNext, scrollPrev }, ev) => ev.deltaY < 0 ? scrollPrev() : scrollNext();

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                fontSize="2xl"
                cursor="pointer"
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                fontSize="2xl"
                cursor="pointer"
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
            />
        </Flex>
    )
}

const ImageScrollbar = ({ data }) => {
    return (
        <ScrollMenu onWheel={onWheel} LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
            {data.map(item => {
                return <Box key={item.id} width="910px" itemID={item.id} overflow="hidden" p="1">
                    <Image
                        placeholder="blur"
                        blurDataURL={item.url}
                        src={item.url}
                        width="1000"
                        height="500"
                        alt="property"
                    />
                </Box>
            })}
        </ScrollMenu>
    )
}

export default ImageScrollbar;
