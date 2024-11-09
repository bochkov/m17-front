/// https://github.com/kirillzhosul/next-yandex-metrika
/// Yandex Metrika for Next.JS
import PropTypes from 'prop-types';

function convertParam(boolValue, defaultValue) {
  let b = boolValue === undefined ? defaultValue : boolValue
  return b ? "true" : "false"
}

YandexMetrikaTag.propTypes = {
  yid: PropTypes.string.isRequired,
  clickmap: PropTypes.bool,
  trackLinks: PropTypes.bool,
  accurateTrackBounce: PropTypes.bool,
  webvisor: PropTypes.bool
}

function YandexMetrikaTag({
  yid,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
  webvisor = true,
}) {
  /// Tag version of the Yandex Metrika.
  /// Used when there is support for the JavaScript to fully track user.
  /// Will cause loading and injecting tag script, and activate Yandex Metrika by constructor.

  // Tag options, see your Yandex Metrika recommendations for setup.
  clickmap = convertParam(clickmap, true);
  trackLinks = convertParam(trackLinks, true);
  accurateTrackBounce = convertParam(accurateTrackBounce, true);
  webvisor = convertParam(webvisor, true);

  // Script that injects Yandex Metrika tag script.
  const scriptInjectorHTML = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            ${scriptInjectorHTML}
            ym(${yid}, "init", {
                clickmap:${clickmap},
                trackLinks:${trackLinks},
                accurateTrackBounce:${accurateTrackBounce},
                webvisor:${webvisor}
            });
      `,
      }}
    />
  );
}

YandexMetrikaPixel.propTypes = {
  yid: PropTypes.string.isRequired
}

function YandexMetrikaPixel({ yid }) {
  /// Pixel version of the Yandex Metrika.
  /// Used when there is no JavaScript on the target browser.
  /// This will cause the Yandex Metrika to track user by calling loading of the pixel image (with target params).

  // Target source to load pixel from.
  const pixelSource = `https://mc.yandex.ru/watch/${yid}`;

  /* eslint-disable @next/next/no-img-element */
  return (
    <noscript>
      <div>
        <img
          src={pixelSource}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
  );
}

YandexMetrika.propTypes = {
  yid: PropTypes.string.isRequired,
  clickmap: PropTypes.bool,
  trackLinks: PropTypes.bool,
  accurateTrackBounce: PropTypes.bool,
  webvisor: PropTypes.bool
}

export default function YandexMetrika({
  yid,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
  webvisor = true,
}) {
  /// Yandex Metrika service.
  return (
    <>
      <YandexMetrikaTag
        yid={yid}
        clickmap={clickmap}
        trackLinks={trackLinks}
        accuracyTrackBounce={accurateTrackBounce}
        webvisor={webvisor}
      />
      <YandexMetrikaPixel yid={yid} />
    </>
  );
}
