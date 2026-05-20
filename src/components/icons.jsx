'use client';

import React from 'react';

const Icon = ({ children, size = 20, className = '', stroke = 'currentColor', fill = 'none', strokeWidth = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth}
       strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {children}
  </svg>
);

const IconPost = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.6"/><path d="M21 16l-5-5-9 9"/></Icon>;
const IconStory = (p) => <Icon {...p}><rect x="6" y="3" width="12" height="18" rx="3"/><circle cx="12" cy="7" r="1.4"/><path d="M9 13h6M9 16h4"/></Icon>;
const IconHighlight = (p) => <Icon {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.2"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/></Icon>;
const IconPhoto = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M21 17l-5-5-7 7"/></Icon>;
const IconVideo = (p) => <Icon {...p}><rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="M16 10l5-3v10l-5-3z"/></Icon>;

const IconCheck = (p) => <Icon strokeWidth="2.2" {...p}><path d="M5 12.5l4 4 10-10"/></Icon>;
const IconX = (p) => <Icon strokeWidth="2.2" {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>;
const IconChevron = (p) => <Icon strokeWidth="2" {...p}><path d="M6 9l6 6 6-6"/></Icon>;
const IconArrow = (p) => <Icon strokeWidth="1.8" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></Icon>;
const IconSparkle = (p) => <Icon {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 4l.7 1.6L21 6l-1.3.4L19 8l-.7-1.6L17 6l1.3-.4z"/></Icon>;
const IconMenu = (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
const IconClose = (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>;
const IconPlay = (p) => <Icon fill="currentColor" stroke="none" {...p}><path d="M8 5v14l11-7z"/></Icon>;

// Social / platform marks (filled, 24×24 viewBox)
const BrandIcon = ({ size = 24, className = '', children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconInstagram = (p) => (
  <BrandIcon {...p}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7.378a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244zm0 7.622a2.999 2.999 0 1 1 0-5.998 2.999 2.999 0 0 1 0 5.998zm6.406-9.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
  </BrandIcon>
);

const IconFacebook = (p) => (
  <BrandIcon {...p}>
    <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.503c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </BrandIcon>
);

const IconLinkedin = (p) => (
  <BrandIcon {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </BrandIcon>
);

const IconPinterest = (p) => (
  <BrandIcon {...p}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </BrandIcon>
);

const IconTiktok = (p) => (
  <BrandIcon {...p}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.58-.93-.01 3.61.01 7.22-.02 10.83-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.43-.63.66-1.39.67-2.14.1-3.34.06-6.68.07-10.01z" />
  </BrandIcon>
);

const IconCanva = ({ size = 24, className = '' }) => (
  <img
    src="/assets/canva-icon.png"
    alt=""
    width={size}
    height={size}
    className={`shrink-0 object-contain grayscale opacity-45 transition-opacity group-hover:opacity-85 ${className}`}
    aria-hidden="true"
  />
);

export {
  Icon, IconPost, IconStory, IconHighlight, IconPhoto, IconVideo,
  IconCheck, IconX, IconChevron, IconArrow, IconSparkle, IconMenu, IconClose, IconPlay,
  IconCanva, IconInstagram, IconFacebook, IconLinkedin, IconPinterest, IconTiktok,
};
