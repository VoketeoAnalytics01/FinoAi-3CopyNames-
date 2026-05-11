
// Add missing React import to resolve namespace issues
import React from 'react';

export interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
}

export interface ActionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface RecommendationCardProps {
  title: string;
  subtitle: string;
}

export enum NavItem {
  Home = 'Home',
  SmartRouting = 'Smart Routing',
  RiskCenter = 'Risk Center',
  Profile = 'Profile'
}
