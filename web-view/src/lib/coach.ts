export type CoachingContext = {
    step: number;
    tool: string;
    userLevel: 'beginner' | 'intermediate';
};

export type CoachingResponse = {
    message: string;
    options: string[];
    recommendation: string;
};

const COACHING_DATA: Record<number, CoachingResponse> = {
    1: {
        message: "처음이시군요! 우선 Figma를 실행해서 서비스의 '얼굴'이 될 첫 화면을 그려볼까요? 어떤 종류의 화면을 만들고 싶으신지 알려주세요.",
        options: ["앱 메인 화면", "온보딩 서비스", "랜딩 페이지"],
        recommendation: "AI 추천 레이아웃 생성"
    },
    2: {
        message: "멋진 UI가 완성되었네요! 이제 이 화면을 활용해 홍보 영상을 만들어볼 시간입니다. 초보자도 쉽게 따라 할 수 있도록 영상 구조(컷 리스트)를 짜드릴게요.",
        options: ["기능 강조형 (30초)", "브랜드 인터뷰형 (1분)", "빠른 비트의 SNS 홍보물"],
        recommendation: "영상 시나리오/콘티 생성"
    },
    3: {
        message: "영상의 뼈대가 잡혔습니다. 이제 '모션'을 더해 생동감을 불어넣을 차례예요. After Effects를 실행하고 원하는 모션 스타일을 골라보세요.",
        options: ["부드러운 페이드 인사이트", "역동적인 바운스 효과", "세련된 타이포그래피 슬라이드"],
        recommendation: "모션 템플릿 프로젝트 적용"
    },
    4: {
        message: "마지막 단계입니다! 디자인에 생기를 불어넣을 고품질 이미지를 생성해볼까요? AI가 프롬프트를 화질과 스타일 위주로 최적화해 드릴게요.",
        options: ["실사 사진 스타일", "3D 입체 캐릭터", "미니멀 벡터 일러스트"],
        recommendation: "최적화된 AI 에셋 생성"
    }
};

export function getCoaching(step: number): CoachingResponse {
    return COACHING_DATA[step] || COACHING_DATA[1];
}
