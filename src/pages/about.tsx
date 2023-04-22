import React from "react";
import AppsContainer from "@layouts/AppsContainer";
import TitleHeader from "@components/common/TitleHeader";

import useTranslation from "next-translate/useTranslation";

export default function about() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation("about");
  const descT = t("desc");
  const aboutT = t("title");

  return (
    <AppsContainer>
      <TitleHeader title={aboutT} desc={descT} />
    </AppsContainer>
  );
}
