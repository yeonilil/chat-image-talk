import { useChatBackgroundStore } from "../store/chatBackgroundStore.js";
import { useStore } from "../store/chatStore.js";
import { useProfileStore } from "../store/profileStore.js";

function Chat() {
  const { chatList } = useStore();
  const {
    width,
    height,
    backgroundColor,
    borderThickness,
    borderColor,
    borderStyle,
    borderRadius,
  } = useProfileStore();

  const { backgroundMargin } = useChatBackgroundStore();

  return (
    <>
      {chatList.map((chat) => (
        <div
          className="flex"
          style={{ marginTop: `${backgroundMargin}px` }}
          key={chat.chatId}
        >
          <div
            className="mr-[10px] mt-[5px]"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: backgroundColor,
              borderWidth: `${borderThickness}px`,
              borderColor: borderColor,
              borderStyle: borderStyle,
              borderRadius: `${borderRadius}px`,
            }}
          ></div>
          <div>
            <p className="text-[12px] font-semibold">
              {chat.user ? String(chat.user) : ""}
            </p>
            <div className="flex">
              <div className="w-max h-max px-[10px] py-[5px] text-[14px] bg-gray-200 rounded-[5px]">
                {chat.content ? String(chat.content) : ""}
              </div>
              <p className="text-[10px] mt-[15px] ml-[5px]">
                {chat.time ? String(chat.time) : ""}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Chat;
