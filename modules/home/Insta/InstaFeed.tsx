import { FC, useEffect } from "react";

interface Props {}

export const InstaFeed: FC<Props> = ({}) => {
  useEffect(
    () =>
      (function (d, s, id) {
        var js;
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://embedsocial.com/cdn/ht.js";
        d.getElementsByTagName("head")[0].appendChild(js);
      })(document, "script", "EmbedSocialHashtagScript"),
    []
  );

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="b7ad217024c15a96302cfa58bce6640cf42cb1c9"
    ></div>
  );
};
