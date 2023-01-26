import type { SocialIcons } from "src/types";

const socialIcons: SocialIcons = {
  Github: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="8" y1="11" x2="8" y2="16"></line>
    <line x1="8" y1="8" x2="8" y2="8.01"></line>
    <line x1="12" y1="16" x2="12" y2="11"></line>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>`,
  Mail: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
  Twitter: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
  WhatsApp: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
    </svg>`,
  Snapchat: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118"></path>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Reddit: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
      <path d="M12 8l1 -5l6 1"></path>
      <circle cx="19" cy="4" r="1"></circle>
      <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
      <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
      <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
    </svg>`,
  Skype: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z"></path>
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Telegram: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-tabler"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
      </svg>`,
  Mastodon: `<svg class="icon-tabler" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <path fill="currentColor"
  d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
  q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
  q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
  </svg>`,
  Meetup: `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="10 10 50 50" width="64px" height="64px"><path d="M 24.169922 4.5585938 C 23.414922 4.5585937 22.802734 5.1707813 22.802734 5.9257812 C 22.802734 6.6807812 23.414922 7.2929688 24.169922 7.2929688 
  C 24.924922 7.2929688 25.535156 6.6807812 25.535156 5.9257812 C 25.535156 5.1707813 24.924922 4.5585938 24.169922 4.5585938 z M 40.964844 6.2871094 C 39.557844 6.2871094 38.417969 7.4269844 38.417969 8.8339844 C 38.417969 10.240984 39.557844 11.380859
   40.964844 11.380859 C 42.371844 11.380859 43.511719 10.240984 43.511719 8.8339844 C 43.511719 7.4269844 42.371844 6.2871094 40.964844 6.2871094 z M 33.1875 12.126953 C 27.6045 12.126953 22.849937 15.623969 20.960938 20.542969 C 16.713938 21.188969 
   13.455078 24.846438 13.455078 29.273438 C 13.455078 30.936437 13.922703 32.486453 14.720703 33.814453 C 12.824703 35.541453 11.628906 38.021109 11.628906 40.787109 C 11.628906 45.476109 15.049297 49.355797 19.529297 50.091797 C 19.617297 55.587797 
   24.094328 60.017578 29.611328 60.017578 C 32.026328 60.017578 34.241516 59.166 35.978516 57.75 C 37.298516 58.99 39.063578 59.763672 41.017578 59.763672 C 44.558578 59.763672 47.510562 57.268406 48.226562 53.941406 C 48.373562 53.947406 48.516062 
   53.964844 48.664062 53.964844 C 54.767063 53.964844 59.716797 49.016109 59.716797 42.912109 C 59.716797 40.715109 59.065937 38.674125 57.960938 36.953125 C 59.441938 35.813125 60.412109 34.041344 60.412109 32.027344 C 60.412109 29.105344 58.394594 
   26.670141 55.683594 25.994141 C 55.717594 25.638141 55.738281 25.279062 55.738281 24.914062 C 55.738281 18.659063 50.667109 13.587891 44.412109 13.587891 C 43.012109 13.587891 41.677453 13.853359 40.439453 14.318359 C 38.361453 12.935359 35.8705 
   12.126953 33.1875 12.126953 z M 18.462891 14.253906 C 17.405891 14.253906 16.547875 15.111922 16.546875 16.169922 C 16.546875 17.227922 17.404891 18.085938 18.462891 18.085938 C 19.520891 18.085938 20.378906 17.227922 20.378906 16.169922 C 20.378906 
   15.111922 19.520891 14.253906 18.462891 14.253906 z M 60.203125 20.412109 C 59.013125 20.412109 58.048828 21.377359 58.048828 22.568359 C 58.048828 23.759359 59.012125 24.724609 60.203125 24.724609 C 61.394125 24.724609 62.359375 23.759359 62.359375 
   22.568359 C 62.359375 21.377359 61.394125 20.412109 60.203125 20.412109 z M 38.964844 23.013672 C 40.779844 23.013672 41.652344 24.951172 42.402344 24.951172 C 43.020344 24.951172 43.416172 24.033203 45.701172 24.033203 C 47.743172 24.033203 49.666016 
   25.577656 49.666016 27.972656 C 49.666016 29.723656 47.463125 34.448328 46.578125 36.486328 C 45.373125 39.259328 44.886719 41.118547 44.886719 41.935547 C 44.886719 42.752547 45.203094 43.90575 46.871094 44.09375 C 48.577094 44.28575 50.021484 44.50875 
   50.021484 45.84375 C 50.021484 46.95175 48.888516 47.769531 47.103516 47.769531 C 44.519516 47.769531 39.987328 46.687937 39.986328 42.460938 C 39.986328 40.299937 40.678125 39.418937 41.328125 38.085938 C 42.148125 36.404938 43.702156 33.085734 44.285156 
   31.802734 C 44.868156 30.519734 44.900813 29.750828 44.007812 29.548828 C 43.368813 29.403828 42.774719 29.715563 42.261719 30.851562 C 41.788719 31.898562 37.728953 39.700547 37.126953 41.060547 C 36.440953 42.609547 35.470719 43.728516 34.011719 43.728516 
   C 32.552719 43.728516 31.425109 42.745703 32.287109 40.470703 C 32.928109 38.778703 34.931266 33.979062 35.322266 32.789062 C 35.732266 31.541063 35.365172 30.851391 34.576172 30.650391 C 33.978172 30.498391 33.270953 30.750984 32.751953 31.958984 C 32.665953 
   32.159984 28.610578 42.308172 28.142578 43.451172 C 27.617578 44.735172 26.523344 46.501953 24.402344 46.501953 C 22.773344 46.501953 19.331281 45.052078 20.238281 41.330078 C 20.496281 40.272078 23.095188 32.030219 23.867188 29.699219 C 24.559188 27.611219 
   25.566172 23.734375 29.951172 23.734375 C 32.056172 23.734375 32.963766 25.367188 34.384766 25.367188 C 35.741766 25.367188 36.485844 23.013672 38.964844 23.013672 z M 67.328125 28.464844 C 66.681125 28.464844 66.158203 28.987766 66.158203 29.634766 C 66.158203 
   30.281766 66.681125 30.806641 67.328125 30.806641 C 67.975125 30.806641 68.5 30.281766 68.5 29.634766 C 68.5 28.987766 67.975125 28.464844 67.328125 28.464844 z M 8.5410156 32.085938 C 7.1340156 32.085938 5.9941406 33.225813 5.9941406 34.632812 C 5.9941406 
   36.039812 7.1340156 37.179688 8.5410156 37.179688 C 9.9480156 37.179688 11.087891 36.039812 11.087891 34.632812 C 11.087891 33.226813 9.9480156 32.085938 8.5410156 32.085938 z M 64.158203 36.033203 C 63.288203 36.033203 62.582031 36.738422 62.582031 37.607422 
   C 62.582031 38.477422 63.288203 39.183594 64.158203 39.183594 C 65.028203 39.183594 65.732422 38.477422 65.732422 37.607422 C 65.732422 36.737422 65.028203 36.033203 64.158203 36.033203 z M 16.574219 51.949219 C 15.926219 51.949219 15.400391 52.473094 
   15.400391 53.121094 C 15.400391 53.769094 15.926219 54.294922 16.574219 54.294922 C 17.222219 54.294922 17.746094 53.769094 17.746094 53.121094 C 17.746094 52.473094 17.222219 51.949219 16.574219 51.949219 z M 52.210938 56.046875 C 50.748938 56.046875 
   49.564453 57.232359 49.564453 58.693359 C 49.564453 60.155359 50.748937 61.339844 52.210938 61.339844 C 53.672938 61.339844 54.857422 60.155359 54.857422 58.693359 C 54.857422 57.231359 53.672938 56.046875 52.210938 56.046875 z M 35.677734 60.927734 C 
   34.775734 60.927734 34.043922 61.659547 34.044922 62.560547 C 34.044922 63.462547 34.775734 64.193359 35.677734 64.193359 C 36.579734 64.193359 37.310547 63.462547 37.310547 62.560547 C 37.310547 61.658547 36.579734 60.927734 35.677734 60.927734 z"/>
   </svg>`,
};

export default socialIcons;
