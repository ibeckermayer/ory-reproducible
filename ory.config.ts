import type { OryClientConfiguration } from '@ory/elements-react';

const config: OryClientConfiguration = {
  project: {
    name: 'Ory Bug Reproduction',
    default_locale: 'en',
    locale_behavior: 'force_default',
    error_ui_url: '/error',
    registration_enabled: false,
    verification_enabled: false,
    recovery_enabled: false,
    default_redirect_url: '/dashboard',
    login_ui_url: '/auth/login',
    registration_ui_url: '/auth/registration',
    verification_ui_url: '/auth/verification',
    recovery_ui_url: '/auth/recovery',
    settings_ui_url: '/auth/settings',
  },
};

export default config;

