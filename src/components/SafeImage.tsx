import { useState, type ImgHTMLAttributes } from 'react';
export default function SafeImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  // Remember which src failed so a new src gets a fresh attempt.
  const [failedSrc, setFailedSrc] = useState<string | undefined>();
  return failedSrc !== undefined && failedSrc === props.src ? <div className={'image-fallback ' + (props.className || '')} role="img" aria-label={props.alt || 'Ảnh'}>Ảnh tạm thời chưa hiển thị</div> : <img {...props} onError={() => setFailedSrc(props.src)} />;
}
