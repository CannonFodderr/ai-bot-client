
import './chat-log.style.css'
import ChatLogItem from './chat-log-item.component'
type ChatLogProps = {
    history: HistoryMessage[]
}

const ChatLog = ({history = []}: ChatLogProps) => {
    const logItems = history.map((hMessage, i) =>
        <ChatLogItem key={i} historyMessage={hMessage} />
      );
    return (
        <>
        <div className="chat-log container">
            <div className="chat-log list">
                {logItems}
            </div>
        </div>
        </>
    )
}


export default ChatLog