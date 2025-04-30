import { styled } from "@mui/material"
import Image from "../../../../assets/images/fotoEduardo.jpg"

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black"
    }))
    const StyledIMG = styled("img")(()=> ({
        width: "20%",
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                Ola
                <StyledIMG src={Image} />
            </StyledHero>
        </>
    )
}

export default Hero
