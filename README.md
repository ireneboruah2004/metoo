# MeToo web: one-tap emergency icon

You get TWO icons on the phone:
- **MeToo**: the normal app (Get help, contacts, rights, SOS button).
- **MeToo SOS**: tap it and the emergency starts: siren + location message. No SOS button to find.

## Upload (GitHub)

1. Open your repo `metoo` > **Add file** > **Upload files**.
2. Drag in ALL files from this folder (they replace the old ones). New: `panic.html`, `manifest-sos.webmanifest`, `icon-sos-*.png`.
3. Commit. Wait 1 to 2 minutes (check the Actions tab for the green tick).
4. If you change anything later, bump `MeToo-v5` to `MeToo-v6` in `sw.js`.

This `index.html` replaces yours. If you already changed the design in your own `index.html`, do not overwrite it: tell me and I will give you just the small piece to paste in.

## New: privacy features

- **Opens on Get help.** The first screen is the help screen. SOS is one tap away (Emergency SOS button).
- **Quick exit** (top right, every screen): instantly leaves to a weather search. It refuses while the siren is on, so the siren is never cut off by accident.
- **App lock:** Contacts tab > set a PIN > Turn on app lock. The app then asks for the PIN every time it opens (and after 60 seconds in the background). The MeToo SOS icon and the #alert/#siren links are never locked, so emergencies stay instant.
- **Plain icon name:** when you add MeToo to the home screen, rename the icon to something ordinary.
- Quick exit does not erase the browser history. Tell testers that records stay on the phone until deleted, and that the PIN lock protects them.

## Install the emergency icon (once, on each phone)

1. Open the normal app first: add 2 contacts, set a PIN, tap "Check location" and allow it.
2. In the phone browser open `https://YOUR-NAME.github.io/metoo/panic.html`. You will see the install page. It does NOT start the siren in a browser tab.
3. **iPhone (Safari):** Share > Add to Home Screen. **Android (Chrome):** menu > Install app (or Add to home screen).
4. Put the MeToo SOS icon where you can reach it fast (first screen, bottom row).

## What happens when she taps the MeToo SOS icon

- **Android:** the siren starts by itself and the message with her location is ready.
- **iPhone:** a full red screen says TAP ANYWHERE. One touch anywhere starts the siren and the message. (iPhone blocks sound until you touch the screen. No website can get around this.)
- She still has to tap **Send** in Messages. The siren is stopped only by her PIN.
- If she opened it by mistake, the red screen has a small link "Opened by mistake? Open the app".

## Limits (be honest with testers)

- Accidental taps start a loud siren. That is why it is a separate icon. Keep it away from the normal icon.
- The siren may stop if the phone locks or if she switches to Messages. Test this on a real iPhone and Android.
- No website can send the SMS by itself or make it silent. A native Android app can send SMS automatically, but only outside the Play Store.
- The icon's name shows on the home screen. To use a plain name, change `short_name` in `manifest-sos.webmanifest` before installing.

## Test list

1. Normal app: contacts + PIN saved?
2. Install MeToo SOS from `panic.html`.
3. Tap the SOS icon: does the siren start (Android) / does TAP ANYWHERE appear (iPhone)?
4. Is the message ready with the right location and both numbers?
5. Wrong PIN keeps it on, right PIN stops it?
6. Lock the screen for 30 seconds: does the siren keep going?

## Emergency icon (updated)
The "MeToo SOS" home-screen icon now works by taps: opening it = tap 1. Touch the screen once more within 2.5 s = tap 2: the message to your contacts opens (iPhone: you still press Send). Two more touches = 3 taps: siren, stopped only with your PIN. If you do nothing, nothing happens.
Upload the changed files (index.html, panic.html, sw.js) to GitHub, replacing the old ones. Then delete and re-add the SOS icon on the phone.
