export const TALLY_FORM_URL =
  "https://tally.so/embed/jaY2P6?hideTitle=1&dynamicHeight=1";

export const TALLY_FORM_TITLE = "Başvuru formu";

/** Formu hangi CTA'nın açtığı; Tally'deki "source" hidden field'ına yazılır. */
export type CtaSource = "navbar" | "hero" | "whyus" | "closing";

export function getTallyFormUrl(source: CtaSource): string {
  const url = new URL(TALLY_FORM_URL);
  url.searchParams.set("source", source);
  return url.toString();
}

export const SOCIAL_LINKS = {
  instagram:
    "https://www.instagram.com/cofoundtr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  linkedin:
    "https://www.linkedin.com/company/cofoundtr/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B64lSJWEUT5WJxSQt7G2HQA%3D%3D",
} as const;
