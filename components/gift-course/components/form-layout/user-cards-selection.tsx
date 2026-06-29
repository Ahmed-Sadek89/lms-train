import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { savedCards } from '../../utils/validCards'
import { ICardSelection } from '@/types/payment'
import { cn } from '@/lib/utils'
import { CheckCircle2Icon, CreditCard } from 'lucide-react'

interface IUserCardsSelection {
  cardSelect: ICardSelection | null;
  handleCardSelection: (card: ICardSelection) => void;
}

const UserCardsSelection = ({ cardSelect, handleCardSelection }: IUserCardsSelection) => {
    return (
        <div className="flex flex-col gap-y-[16px]">
            {savedCards.map((savedCard) => (
                <Button
                    key={savedCard.id}
                    size="sm"
                    type="button"
                    variant="payment-button"
                    className={cn(
                        "font-body-tiny-400",
                        savedCard.id === cardSelect?.id ? "border-success-500" : ""
                    )}
                    onClick={() => handleCardSelection(savedCard)}
                >
                    <div className="flex items-center gap-x-2">
                        <Image src="/icon/visa.svg" alt="visa" width={32} height={32} />
                        <span>{savedCard.cardNumber.slice(0, 4)} **** **** ****</span>
                    </div>
                    <span className="hidden md:block">{savedCard.cardName}</span>
                    <span className="hidden md:block">{savedCard.expiration}</span>
                    <span className="hidden md:block">{savedCard.expiration}</span>
                    {savedCard.id === cardSelect?.id && (
                        <CheckCircle2Icon className="text-success-500" size={18} />
                    )}
                </Button>
            ))}
            <Button
                size="sm"
                type="button"
                variant="payment-button"
                className={cn(
                    "font-body-tiny-400",
                    !cardSelect?.id ? "border-success-500" : ""
                )}
                onClick={() =>
                    handleCardSelection({
                        id: "",
                        cardName: "",
                        cardNumber: "",
                        CVC: "",
                        expiration: "",
                    })
                }
            >
                <div className="flex items-center gap-x-2">
                    <CreditCard className="text-primary-500" />
                    <span>New Card payment</span>
                </div>
                {!cardSelect?.id && (
                    <CheckCircle2Icon className="text-success-500" size={18} />
                )}
            </Button>
        </div>
    )
}

export default UserCardsSelection