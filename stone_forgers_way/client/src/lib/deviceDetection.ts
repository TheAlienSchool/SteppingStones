/**
 * Device and browser detection utilities for optimal download UX
 * Detects: iOS/Android, Safari/Chrome, and triggers appropriate save methods
 */

export interface DeviceInfo {
  isIOS: boolean;
  isAndroid: boolean;
  isMobile: boolean;
  isSafari: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}

export function detectDevice(): DeviceInfo {
  const ua = navigator.userAgent;
  
  // OS Detection
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);
  const isDesktop = !/iPhone|iPad|iPod|Android/.test(ua);
  
  // Device Type
  const isMobile = /iPhone|Android/.test(ua) && !/iPad/.test(ua);
  const isTablet = /iPad|Android/.test(ua);
  
  // Browser Detection
  const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|OPR/.test(ua);
  const isChrome = /Chrome|Chromium/.test(ua);
  const isFirefox = /Firefox/.test(ua);

  return {
    isIOS,
    isAndroid,
    isMobile,
    isSafari,
    isChrome,
    isFirefox,
    isDesktop,
    isTablet,
  };
}

/**
 * Convert canvas to blob and trigger platform-specific save
 */
export async function saveCanvasToDevice(
  canvas: HTMLCanvasElement,
  filename: string,
  deviceInfo: DeviceInfo
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Failed to create canvas blob"));
            return;
          }

          try {
            if (deviceInfo.isIOS && deviceInfo.isSafari) {
              // iPhone Safari: Create image element for long-press save
              saveToImageForLongPress(blob, filename);
            } else if (deviceInfo.isAndroid && deviceInfo.isChrome) {
              // Android Chrome: Use blob download
              saveToDownload(blob, filename);
            } else if (deviceInfo.isDesktop) {
              // Desktop: Standard download
              saveToDownload(blob, filename);
            } else {
              // Fallback: Try standard download for any other browser
              saveToDownload(blob, filename);
            }
            resolve();
          } catch (error) {
            console.error("Save method failed:", error);
            reject(error);
          }
        },
        "image/png",
        0.95
      );
    } catch (error) {
      console.error("Canvas to blob conversion failed:", error);
      reject(error);
    }
  });
}

/**
 * iPhone Safari: Create image element that triggers native save UI on long-press
 * This leverages iOS's native "Save Image" functionality
 */
function saveToImageForLongPress(blob: Blob, filename: string): void {
  try {
    const url = URL.createObjectURL(blob);
    console.log("Created image URL for iOS:", url);
    
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Save image";
    img.style.display = "none";
    img.style.maxWidth = "100%";
    
    // Append to body temporarily
    document.body.appendChild(img);
    
    // Focus the image
    img.focus();
    
    // On iPhone Safari, users can long-press the image to get "Save Image" option
    // Give brief time for image to load, then show instructions
    const timeoutId = setTimeout(() => {
      try {
        // Create temporary overlay with instructions
        const overlay = document.createElement("div");
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        `;
        
        overlay.innerHTML = `
          <div style="
            background: white;
            padding: 24px;
            border-radius: 12px;
            text-align: center;
            max-width: 320px;
          ">
            <p style="
              font-size: 16px;
              color: #1c1917;
              margin-bottom: 16px;
              font-family: Georgia, serif;
            ">
              Long-press the image below to save to your camera roll
            </p>
            <img src="${url}" style="
              max-width: 100%;
              width: 200px;
              height: auto;
              border-radius: 8px;
              margin-bottom: 16px;
            " />
            <button id="ios-save-dismiss" style="
              background: #b45309;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
            ">
              Done
            </button>
          </div>
        `;
        
        document.body.appendChild(overlay);
        console.log("iOS save overlay created");
        
        const dismissBtn = document.getElementById("ios-save-dismiss");
        if (dismissBtn) {
          dismissBtn.addEventListener("click", () => {
            try {
              if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
              }
              if (document.body.contains(img)) {
                document.body.removeChild(img);
              }
              URL.revokeObjectURL(url);
              console.log("iOS overlay dismissed and cleaned up");
            } catch (e) {
              console.error("Cleanup error:", e);
            }
          });
        }
      } catch (overlayError) {
        console.error("Overlay creation failed:", overlayError);
        // Fallback: remove image and revoke URL
        if (document.body.contains(img)) {
          document.body.removeChild(img);
        }
        URL.revokeObjectURL(url);
      }
    }, 500);
    
    // Store timeout ID for potential cleanup
    (img as any).__timeoutId = timeoutId;
  } catch (error) {
    console.error("iOS long-press setup failed:", error);
    throw error;
  }
}

/**
 * Standard blob download for Android and Desktop
 * Uses proper Content-Disposition header via blob URL
 */
function saveToDownload(blob: Blob, filename: string): void {
  try {
    const url = URL.createObjectURL(blob);
    console.log("Created object URL:", url);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    
    document.body.appendChild(link);
    console.log("Triggering download for:", filename);
    
    link.click();
    
    // Cleanup after a short delay to ensure download has started
    setTimeout(() => {
      try {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
        URL.revokeObjectURL(url);
        console.log("Download cleanup completed");
      } catch (e) {
        console.error("Cleanup error:", e);
      }
    }, 100);
  } catch (error) {
    console.error("Download failed:", error);
    throw error;
  }
}

/**
 * Get user-friendly device name for instructions
 */
export function getDeviceDisplayName(deviceInfo: DeviceInfo): string {
  if (deviceInfo.isIOS) {
    return deviceInfo.isTablet ? "iPad" : "iPhone";
  } else if (deviceInfo.isAndroid) {
    return "Android device";
  } else {
    return "desktop";
  }
}

/**
 * Get platform-specific instructions for saving
 */
export function getSaveInstructions(deviceInfo: DeviceInfo): string {
  if (deviceInfo.isIOS && deviceInfo.isSafari) {
    return "Long-press the image to save to your camera roll";
  } else if (deviceInfo.isAndroid) {
    return "Tap the download icon or use your browser's download feature";
  } else {
    return "Click the save button to download as PNG";
  }
}
