
import { PromptInputBox } from "@/components/ai-prompt-box";

const DemoOne = () => {
    const handleSendMessage = (message: string, files?: File[]) => {
        console.log('Message:', message);
        console.log('Files:', files);
    };
    return (
        <div className="flex w-full h-screen justify-center items-center ">
            <div className="p-4 w-[500px]">
                <PromptInputBox onSend={(message, files) => console.log(message, files)} />
            </div>
        </div>
    );
};

export { DemoOne };
