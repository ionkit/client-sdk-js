import { Room, RoomConnectOptions, RoomOptions } from '../src/index';
declare const appActions: {
    connectWithFormInput: () => Promise<void>;
    connectToRoom: (url: string, token: string, roomOptions?: RoomOptions | undefined, connectOptions?: RoomConnectOptions | undefined, shouldPublish?: boolean | undefined) => Promise<Room | undefined>;
    toggleAudio: () => Promise<void>;
    toggleVideo: () => Promise<void>;
    flipVideo: () => void;
    shareScreen: () => Promise<void>;
    startAudio: () => void;
    enterText: () => void;
    disconnectRoom: () => void;
    handleScenario: (e: Event) => void;
    handleDeviceSelected: (e: Event) => Promise<void>;
    handlePreferredQuality: (e: Event) => void;
};
declare global {
    interface Window {
        currentRoom: any;
        appActions: typeof appActions;
    }
}
export {};
//# sourceMappingURL=sample.d.ts.map