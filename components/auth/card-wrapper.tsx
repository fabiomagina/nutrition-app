"use client"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/auth/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel?: string;
    backButtonLabel?: string;
    backButtonHref?: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = false
}: CardWrapperProps) => {
    return (
        <Card className="min-w-[400px] shadow-md">
            {headerLabel
                && <CardHeader>
                    <Header label={headerLabel} />
                </CardHeader>}

            <CardContent>
                {children}
            </CardContent>

            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}

            {(backButtonLabel && backButtonHref)
                &&
                <CardFooter>
                    <BackButton
                        label={backButtonLabel}
                        href={backButtonHref}>
                    </BackButton>
                </CardFooter>}

        </Card>
    )
};