import { BookList, BooksApi, ErrorsApi, PartnershipsApi } from "apis";
import { useCKEditor } from "ckeditor4-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Field } from "./PartnershipForm.style";
import * as S from "./PartnershipForm.style";

const PartnershipForm = () => {
    const router = useRouter();

    const [companyName, setCompanyName] = useState("");
    const [companyLink, setCompanyLink] = useState("");
    const [managerName, setManagerName] = useState("");
    const [managerPhone, setManagerPhone] = useState("");
    const [managerMail, setManagerMail] = useState("");
    const [file, setFile] = useState<File>();

    const [element, setElement] = useState<HTMLDivElement | null>(null);

    const { editor } = useCKEditor({
        element,
        type: "classic",
        config: {
            autoGrow_onStartup: true,
            extraPlugins: [
                "uploadimage",
                "div",
                "autolink",
                "autoembed",
                "embedsemantic",
                "autogrow",
                "widget",
                "lineutils",
                "clipboard",
                "dialog",
                "dialogui",
                "elementspath",
            ].join(","),
        },
    });

    const handleSubmit = () => {
        const content = editor.getData();
        if (
            companyName &&
            companyLink &&
            managerName &&
            managerPhone &&
            managerMail &&
            content
        ) {
            PartnershipsApi.create({
                company_name: companyName,
                company_link: companyLink,
                manager_name: managerName,
                manager_phone: managerPhone,
                manager_mail: managerMail,
                file,
                content,
            }).then(() => {
                alert("제출이 완료되었습니다.");
                router.reload();
            });
        } else {
            alert("파일 첨부 외의 모든 항목은 필수 항목입니다.");
        }
    };

    return (
        <S.Container>
            <S.Header>
                <table>
                    <tbody>
                        <tr>
                            <th>회사명</th>
                            <S.Field>
                                <input
                                    type="input"
                                    placeholder="회사명"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                />
                            </S.Field>
                        </tr>
                        <tr>
                            <th>홈페이지</th>
                            <S.Field>
                                <input
                                    type="input"
                                    placeholder="홈페이지 주소"
                                    value={companyLink}
                                    onChange={(e) =>
                                        setCompanyLink(e.target.value)
                                    }
                                />
                            </S.Field>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>담당자명</th>
                            <S.Field>
                                <input
                                    type="input"
                                    placeholder="담당자명"
                                    value={managerName}
                                    onChange={(e) =>
                                        setManagerName(e.target.value)
                                    }
                                />
                            </S.Field>
                        </tr>
                        <tr>
                            <th>담당자 연락처</th>
                            <S.Field>
                                <input
                                    type="number"
                                    placeholder="전화번호"
                                    value={managerPhone}
                                    onChange={(e) =>
                                        setManagerPhone(e.target.value)
                                    }
                                />
                            </S.Field>
                        </tr>
                        <tr>
                            <th>담당자 이메일</th>
                            <S.Field>
                                <input
                                    type="email"
                                    placeholder="이메일 주소"
                                    value={managerMail}
                                    onChange={(e) =>
                                        setManagerMail(e.target.value)
                                    }
                                />
                            </S.Field>
                        </tr>
                    </tbody>
                </table>
            </S.Header>
            <S.Flex>
                <div>
                    <div>제휴제안 내용</div>
                    <div style={{ flexGrow: 1 }}>
                        <div ref={setElement} />
                    </div>
                </div>
                <div>
                    <div>제휴제안서 첨부</div>
                    <div>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </div>
            </S.Flex>
            <button type="button" onClick={handleSubmit}>
                제출
            </button>
        </S.Container>
    );
};

export default PartnershipForm;
