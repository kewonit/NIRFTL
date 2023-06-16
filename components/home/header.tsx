import { type NextPage } from "next";
import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'
 
export function NavigationMenuHeader() {
  return (
      <>
      <NavigationMenu>
      <Avatar className="mx-auto pl-4 max-w-7xl flex flex-1 justify-items-start">
        <a className="pl-2 pt-1 text-xl font-sans font-bold" href="/"> NIRFTL </a>
      </Avatar>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Navigation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://github.com/KewKartik/NIRFTL"
                    >
                      <Star className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        NIRFTL
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">  
                      Found it useful! Star the NIRFTL repo.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Home">
                  Back to the home page
                </ListItem>
                <ListItem href="/docs/installation" title="Selection">
                  Select the field you wanna look up the ranking for!
                </ListItem>
                <ListItem href="/faq" title="Faq">
                  Have questions? Find the solutions here
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Ranking</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://github.com/KewKartik/NIRFTL"
                    >
                      <Star className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        NIRFTL
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">  
                      Found it useful! Star the NIRFTL repo.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/ranking/btech" title="BTech">
                  Have a look at the BTech Engineering college rankings!
                </ListItem>
                <ListItem title="Research Institutions [Coming Soon] ">
                  [Coming Soon] 
                </ListItem>
                <ListItem title="Medical [Coming Soon]">
                  [Coming Soon]
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"