'use client'
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoToTop = React.memo(() => {
  const router = useRouter();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [router.asPath]);
  
  return null;
});

export default GoToTop;