export interface PluginOptions {
  initializedOptions: string[];
  onPositionChange: (positions: string[]) => void;
  onComplete: (positions: string[]) => void;
  onInit: () => void;
}

export interface AppProps {
  options: PluginOptions;
}
