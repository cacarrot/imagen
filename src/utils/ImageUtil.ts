import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default class ImageUtil {
  public static saveAsPng(
    targetRef: React.MutableRefObject<null>,
    onFinally: Function = () => null,
    onSuccess: Function = () => null,
    onError: Function = () => null
  ) {
    const node = targetRef.current;
    if (node === null) return;
    domtoimage
      .toBlob(node, { cachebust: true })
      .then(blob => {
        saveAs(blob, "image.png");
        onSuccess();
      })
      .catch(() => {
        onError();
      })
      .finally(() => {
        onFinally();
      });
  }
}
