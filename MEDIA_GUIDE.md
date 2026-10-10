# Adding your photos, videos, songs & foods ♡

All words and media are set in `src/content.ts`.

## Photos & videos
1. Put files in `public/media/` (e.g. `public/media/first-meeting.jpg`, `public/media/us.mp4`).
2. In `gallery`, set `src: "/media/first-meeting.jpg"`, `type: "image"` or `"video"`, and a caption. Add up to 15 items.

## Pakistani songs (one per chapter)
1. Use audio you own or are allowed to use (purchased MP3s, royalty-free, or your own recordings). Put them in `public/music/`.
2. In `soundtrack`, set e.g. `memories: { title: "Tu Jhoom", artist: "Coke Studio", src: "/music/tu-jhoom.mp3" }`.
3. Music starts after she taps the envelope and fades between songs as she scrolls through chapters.

## Her favourite foods
Edit `foods` in `src/content.ts`. She can also add/remove items on the site (saved on her phone).

## Final screen
Set `contact.whatsapp` to your number (e.g. `"919876543210"`) so she can send you her choice.
