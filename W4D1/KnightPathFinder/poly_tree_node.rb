class PolyTreeNode
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    attr_reader :parent, :children
    attr_accessor :value

    def parent=(parent_node)
        @parent.children.delete(self) if !@parent.nil?
        @parent = parent_node

        if !parent_node.nil? && !parent_node.children.include?(self)
            parent_node.children << self 
        end
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        raise 'Child node is not a child' if !@children.include?(child_node)
        @children.delete(child_node)
        child_node.parent = nil
    end

    # def inspect
    #    # "PTN: val: #{@value}, par: #{@parent.value}, children: #{@children}"
    # end

    def dfs(target)
        return self if @value == target
    
        @children.each do |ele|
            result = ele.dfs(target)
            return result if !result.nil?
        end

        nil
    end

    def bfs(target)
        queue = [self]

        while !queue.empty?
            if queue[0].value == target
                return queue[0]
            else
                queue += queue.shift.children
            end
        end

        nil
    end
end