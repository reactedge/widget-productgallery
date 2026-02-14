import {useMemo} from "react";
import {activity} from "../activity";
import {type GalleryWidgetConfig, readWidgetConfig} from "../ProductGalleryConfig.ts";

export function useWidgetConfig(
    host: HTMLElement
): GalleryWidgetConfig | null {
    return useMemo(() => {
        const baseConfig = readWidgetConfig(host);
        if (!baseConfig) {
            activity('bootstrap', '[Product Gallery] Widget is not correctly configured', null, 'error');
            return null;
        }

        activity('bootstrap', '[Product Gallery] Widget config loaded', baseConfig);

        return baseConfig
    }, [host]);
}



