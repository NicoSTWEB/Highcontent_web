export const OUTSETA_PLAN_UIDS = {
  pro: 'jW70brmq',
  starterDentist: 'B9lKpvQ8',
  starterEsthetician: 'pWrK5Mmn',
  starterBusinessCoach: 'E9LJR5mw',
};

export function openOutsetaRegister(planUid) {
  if (typeof window === 'undefined' || !planUid) return;

  const options = {
    widgetMode: 'register',
    mode: 'popup',
    planUid,
    planPaymentTerm: 'month',
    skipPlanOptions: true,
  };

  if (window.Outseta?.auth?.open) {
    window.Outseta.auth.open(options);
    return;
  }

  const params = new URLSearchParams({
    widgetMode: 'register',
    planUid,
    planPaymentTerm: 'month',
    skipPlanOptions: 'true',
  });
  window.location.href = `https://highcontent.outseta.com/auth?${params.toString()}#o-anonymous`;
}
