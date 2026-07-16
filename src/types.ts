export interface Feature {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  detailDesc: string;
  duration: string;
  focus: string;
}

export interface PainPoint {
  id: string;
  title: string;
  desc: string;
  solution: string;
}

export interface OrderState {
  status: 'idle' | 'processing' | 'completed' | 'declined';
  selectedOption?: 'upgrade' | 'main_only';
}
