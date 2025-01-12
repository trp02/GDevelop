// @flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import muiDecorator from '../../ThemeDecorator';
import paperDecorator from '../../PaperDecorator';
import CurrentUsageDisplayer from '../../../Profile/CurrentUsageDisplayer';
import subscriptionSuggestionDecorator from '../../SubscriptionSuggestionDecorator';
import {
  limitsReached,
  noSubscription,
  silverSubscriptionWithExpiredRedemptionCode,
  silverSubscriptionWithRedemptionCode,
  subscriptionForIndieUser,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Profile/CurrentUsageDisplayer',
  component: CurrentUsageDisplayer,
  decorators: [subscriptionSuggestionDecorator, paperDecorator, muiDecorator],
};

export const Default = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '1day',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const Default30Days = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '30days',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const With2BuildsRunning = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 0,
      max: 5,
      limitReached: false,
      period: '1day',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={2}
  />
);

export const With1BuildRemaining = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 4,
      max: 5,
      limitReached: false,
      period: '1day',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const With1BuildRemaining30Days = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 4,
      max: 5,
      limitReached: false,
      period: '30days',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const With1BuildRemainingBut1BuildRunning = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 4,
      max: 5,
      limitReached: false,
      period: '1day',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={1}
  />
);

export const With1BuildRemainingBut1BuildRunning30Days = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={{
      current: 4,
      max: 5,
      limitReached: false,
      period: '30days',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={1}
  />
);

export const WithRedemptionCode = () => (
  <CurrentUsageDisplayer
    subscription={silverSubscriptionWithRedemptionCode}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '1day',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const WithExpiredRedemptionCode = () => (
  <CurrentUsageDisplayer
    subscription={silverSubscriptionWithExpiredRedemptionCode}
    quota={{
      current: 2,
      max: 10,
      limitReached: false,
      period: '1day',
    }}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const LimitReached = () => (
  <CurrentUsageDisplayer
    subscription={subscriptionForIndieUser}
    quota={limitsReached.quotas['cordova-build']}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);

export const LimitsReachedWithoutSubscription = () => (
  <CurrentUsageDisplayer
    subscription={noSubscription}
    quota={limitsReached.quotas['cordova-build']}
    onChangeSubscription={action('on change subscription callback')}
    numberOfPendingBuilds={0}
  />
);
