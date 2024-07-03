
import './chat-log-item.style.css'
type ChatLogItemProps = {
    historyMessage: HistoryMessage
}
const ChatLogItem = ({historyMessage}: ChatLogItemProps) => {
    return (
        <>
            <div className={"chat-log-Item " + (historyMessage.role === "ai" ? "ai" : "user")}>
                {historyMessage.message}
            </div>
        </>
    )
}



export default ChatLogItem