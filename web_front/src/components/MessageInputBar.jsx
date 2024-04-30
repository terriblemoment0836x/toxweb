import { Button, Flex } from "antd";
import { SendOutlined } from "@ant-design/icons";
import MessageInputEmoji from "./MessageInputEmoji";
import MessageInputText from "./MessageInputText";
import globalContext from "../context";
import { useContext } from "react";

export default function MessageInputBar() {
    const {messageSentBtnHandler } = useContext(globalContext)
    return (
        <Flex style={{ flex:'0 1 8%', minWidth:'100%', padding:'0.5%' }} justify="space-evenly" align="center">
            <MessageInputEmoji /> 
            <MessageInputText  />

            <Button icon={<SendOutlined />} type="primary"  shape="circle" size="large" style={{margin:'0 1% 0 0'}} onClick={messageSentBtnHandler}/>

    </Flex>
    );
}
