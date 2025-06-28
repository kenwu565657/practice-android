import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    open(path: string, rate: number): void;
    sendByteArrayData(byteArrayData: string): void;
    close(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeSerialPort',
);
