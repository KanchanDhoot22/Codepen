import styled from "@emotion/styled";
import { useContext } from "react";
import { dataContext } from "../Context/DataProvider";
import Editor from "./Editor";
import {Box , style} from '@mui/material';
const Container = styled(Box)`
    background-color: #060606;
    height: 52vh;
    display: flex;
`
const Code=()=>{
const {html , setHtml , css , setCss , js , setJs} = useContext(dataContext);


    return(
        <Container>
           <Editor heading="HTML"
            icon="/" 
            color="#FF3c41"
            value = {html}
            onChange = {setHtml}
           
           />
           <Editor heading="CSS" 
           icon="*"
            color='#0EBEFF'
            value = {css}
            onChange = {setCss}
           
           />
           <Editor heading="Javascript"
            icon="{}"
           color='#FCD000'
           value = {js}
           onChange = {setJs}
           
           />
        </Container>
    )
}

export default Code;