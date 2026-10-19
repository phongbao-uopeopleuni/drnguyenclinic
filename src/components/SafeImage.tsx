import { useState, type ImgHTMLAttributes } from 'react';
export default function SafeImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  return failed ? <div className={'image-fallback ' + (props.className || '')} role="img" aria-label={props.alt}>Ảnh tạm thời chưa hiển thị</div> : <img {...props} onError={() => setFailed(true)} />;
}
